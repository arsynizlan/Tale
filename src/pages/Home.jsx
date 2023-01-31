import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )
    const element = document.documentElement
    const options = [
        {
            initial: 'S',
            text: 'light',
        },
        {
            initial: 'M',
            text: 'dark',
        },
        {
            initial: 'L',
            text: 'system',
        },
    ]

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break
            default:
                localStorage.removeItem('theme')
                break
        }
    }, [theme])

    return (
        <section className='min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100'>
            <div className='fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded'>
                {options.map((opt) => (
                    <button
                        key={opt.text}
                        onClick={() => setTheme(opt.text)}
                        className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                            theme === opt.text && 'text-blue-400'
                        }`}>
                        {opt.initial}
                    </button>
                ))}
            </div>
            <div className='max-w-3xl mx-auto px-5'>
                <div className='text-center mb-5'>
                    <h2>Code A Program</h2>
                    <h5>Share And Subscribe</h5>
                </div>
                <p>
                    Exercitation voluptate elit do eiusmod deserunt ex fugiat.
                    Qui voluptate labore irure consequat excepteur sunt.
                    Voluptate sunt dolore in voluptate incididunt. Incididunt
                    occaecat ad nostrud ea qui cupidatat sit. Ea excepteur est
                    magna aute elit reprehenderit nostrud minim veniam. Do
                    nostrud proident ullamco nisi labore qui ut et amet dolor
                    amet. Aliqua ipsum nulla laborum ipsum deserunt et labore.
                    Amet minim cillum sunt ullamco cillum dolor id quis
                    reprehenderit ad culpa aute. Consequat tempor ipsum deserunt
                    deserunt est velit tempor tempor duis tempor sint mollit id
                    pariatur. Velit cupidatat ut exercitation cillum incididunt
                    ut velit tempor in consectetur. Fugiat sunt ipsum in ex
                    consectetur exercitation consequat. Voluptate aute minim do
                    sunt occaecat reprehenderit non aliquip sint qui culpa culpa
                    duis dolor. Do amet Lorem qui qui dolore ut irure cillum
                    adipisicing pariatur sunt sint minim non. Ipsum in
                    exercitation ex pariatur et. Reprehenderit officia commodo
                    consequat laboris deserunt cupidatat deserunt excepteur
                    nulla non non irure irure velit. Consequat et sunt et
                    voluptate irure ad irure. Do adipisicing dolore incididunt
                    consequat laborum enim culpa quis laboris pariatur.
                </p>
                <p>
                    Exercitation voluptate elit do eiusmod deserunt ex fugiat.
                    Qui voluptate labore irure consequat excepteur sunt.
                    Voluptate sunt dolore in voluptate incididunt. Incididunt
                    occaecat ad nostrud ea qui cupidatat sit. Ea excepteur est
                    magna aute elit reprehenderit nostrud minim veniam. Do
                    nostrud proident ullamco nisi labore qui ut et amet dolor
                    amet. Aliqua ipsum nulla laborum ipsum deserunt et labore.
                    Amet minim cillum sunt ullamco cillum dolor id quis
                    reprehenderit ad culpa aute. Consequat tempor ipsum deserunt
                    deserunt est velit tempor tempor duis tempor sint mollit id
                    pariatur. Velit cupidatat ut exercitation cillum incididunt
                    ut velit tempor in consectetur. Fugiat sunt ipsum in ex
                    consectetur exercitation consequat. Voluptate aute minim do
                    sunt occaecat reprehenderit non aliquip sint qui culpa culpa
                    duis dolor. Do amet Lorem qui qui dolore ut irure cillum
                    adipisicing pariatur sunt sint minim non. Ipsum in
                    exercitation ex pariatur et. Reprehenderit officia commodo
                    consequat laboris deserunt cupidatat deserunt excepteur
                    nulla non non irure irure velit. Consequat et sunt et
                    voluptate irure ad irure. Do adipisicing dolore incididunt
                    consequat laborum enim culpa quis laboris pariatur.
                </p>
                <p>
                    Exercitation voluptate elit do eiusmod deserunt ex fugiat.
                    Qui voluptate labore irure consequat excepteur sunt.
                    Voluptate sunt dolore in voluptate incididunt. Incididunt
                    occaecat ad nostrud ea qui cupidatat sit. Ea excepteur est
                    magna aute elit reprehenderit nostrud minim veniam. Do
                    nostrud proident ullamco nisi labore qui ut et amet dolor
                    amet. Aliqua ipsum nulla laborum ipsum deserunt et labore.
                    Amet minim cillum sunt ullamco cillum dolor id quis
                    reprehenderit ad culpa aute. Consequat tempor ipsum deserunt
                    deserunt est velit tempor tempor duis tempor sint mollit id
                    pariatur. Velit cupidatat ut exercitation cillum incididunt
                    ut velit tempor in consectetur. Fugiat sunt ipsum in ex
                    consectetur exercitation consequat. Voluptate aute minim do
                    sunt occaecat reprehenderit non aliquip sint qui culpa culpa
                    duis dolor. Do amet Lorem qui qui dolore ut irure cillum
                    adipisicing pariatur sunt sint minim non. Ipsum in
                    exercitation ex pariatur et. Reprehenderit officia commodo
                    consequat laboris deserunt cupidatat deserunt excepteur
                    nulla non non irure irure velit. Consequat et sunt et
                    voluptate irure ad irure. Do adipisicing dolore incididunt
                    consequat laborum enim culpa quis laboris pariatur.
                </p>
                <p>
                    Exercitation voluptate elit do eiusmod deserunt ex fugiat.
                    Qui voluptate labore irure consequat excepteur sunt.
                    Voluptate sunt dolore in voluptate incididunt. Incididunt
                    occaecat ad nostrud ea qui cupidatat sit. Ea excepteur est
                    magna aute elit reprehenderit nostrud minim veniam. Do
                    nostrud proident ullamco nisi labore qui ut et amet dolor
                    amet. Aliqua ipsum nulla laborum ipsum deserunt et labore.
                    Amet minim cillum sunt ullamco cillum dolor id quis
                    reprehenderit ad culpa aute. Consequat tempor ipsum deserunt
                    deserunt est velit tempor tempor duis tempor sint mollit id
                    pariatur. Velit cupidatat ut exercitation cillum incididunt
                    ut velit tempor in consectetur. Fugiat sunt ipsum in ex
                    consectetur exercitation consequat. Voluptate aute minim do
                    sunt occaecat reprehenderit non aliquip sint qui culpa culpa
                    duis dolor. Do amet Lorem qui qui dolore ut irure cillum
                    adipisicing pariatur sunt sint minim non. Ipsum in
                    exercitation ex pariatur et. Reprehenderit officia commodo
                    consequat laboris deserunt cupidatat deserunt excepteur
                    nulla non non irure irure velit. Consequat et sunt et
                    voluptate irure ad irure. Do adipisicing dolore incididunt
                    consequat laborum enim culpa quis laboris pariatur.
                </p>
            </div>
        </section>
    )
}

export default Home
