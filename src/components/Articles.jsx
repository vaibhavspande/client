import React from 'react'
import articleContent from '../pages/ArticleContent'
import { Link } from 'react-router-dom'
const Articles = ({ articles }) => {
    return (
        < >
            {
                articleContent.map((articles, i) => (
                    <div key={i} className="p-4 md:w-1/2">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Link to={`/article/${articles.name}`}>
                                <img src={articles.thumbnil} alt="blog" className="lg:h-60 md:h-50 w-full object-cover object-center" />
                            </Link>

                            <div className="p-6">
                                <Link key={i} to={`/article/${articles.name}`}>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">{articles.title}</h3>
                                </Link>
                                <p className="leading-relaxed mb-3
                    ">{articles.content[0].substring(0, 115)} ...</p>
                                <div className="flex item-center flex-wrap">
                                    <Link className=" text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/article/${articles.name}`}>Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Articles