import Head from 'next/head'
import Categorise from '../components/Categorise'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'

export default function Home() {
  const posts = [
    {title:"react test" , reactor: "learn react"},
    {title:"react nextJs" , reactor: "learn NExtJS"},
  ]
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => <PostCard post = {post} key={post.title}/> 
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categorise/>
          </div>
        </div>
      </div>
    
    </div>
  )
}
