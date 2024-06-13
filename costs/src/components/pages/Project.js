import styles from './Project.module.css'

import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {
    const { id } = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch(err => console.log)
        }, 500)
    }, [id])

    return (
    <>
        {project.name ? (
            <div>
                <Container customClass="column"></Container>
            </div>
        ) : (
         <Loading />
        )}
    </>
}

export default Project