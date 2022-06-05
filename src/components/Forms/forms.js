import { useEffect, useState } from "react";
import Button from "../Button/button";
import Input from "../Input/input";
import Select from "../Select/select";
import { Form } from "./forms.style";



export default function Forms({handleSubmit, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    useEffect(()=>{
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data => setCategories(data))
        .catch(err => console.log(err))
    }, [])

    const submit = e =>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange (e){
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }
    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text 
            },
        })
    }

    return (
        <Form onSubmit={submit}>
            <Input
                type='text'
                placeholder='Insira o nome do projeto'
                text='Nome do Projeto'
                name='name'
                handleOnChange={handleChange}
                value = {project.name}
            />
            <Input
                type='number'
                name='budget'
                placeholder='Insira o orçamento total do projeto'
                text='Orçamento do Projeto'
                handleOnChange={handleChange}
                value = {project.budget}
            />
            <Select name='category' text='Selecione a categoria' options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : '' }/>
            <Button text='Criar Projeto'/>
        </Form>
    )
}