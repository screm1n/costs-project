import {useLocation} from 'react-router-dom'

import Message from '../layout/Message'
import Container from '../lauyout/Container'
import LinkButton from '../layout/LinkButton'

import styles from './Projects.module.css'

function Projects() {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
    <div>
        <div>
        <h1>Meus Projetos</h1>
        <a href="#">Novo projeto</a>
        </div>
        {message && <Message type="success" msg={message} />}
        <Container customClass="start">
            <p>Projetos...</p>
        </Container>
    </div>
    )
}

export default Projects