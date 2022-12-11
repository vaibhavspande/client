import React from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../components/Articles'
import articleContent from './ArticleContent'
import NotFound from './NotFound'

const Article = () => {
    const { name } = useParams()

    const article = articleContent.find((article) => article.name === name)
    if (!article) return <NotFound/>;

    const otherArticles = articleContent.filter(article => article.name !== name)

    return (
        <>

            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>{article.title}</h1>
            {
                article.content.map((par, i) => (
                    <p className='max-auto leading-relaxed text-base mb-4' key={i} >{par}</p>
                ))
            }
            <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Other articles</h1>
            <div className='flex flex-wrap -m-4'>
                <Articles articles={otherArticles} />
            </div>

        </>
    )
}

export default Article