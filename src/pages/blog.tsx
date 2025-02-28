import React from 'react'
import { getBlogSectionPosts } from '../services/notionServices'
import { BlogGrid } from '../components/BlogComponent/BlogGrid/BlogGrid'
import { BlogGridItemProps, FooterComponent, PageHeroComponent, ProfileComponent } from '../components'

export const getStaticProps = async () => {
	try {
		let posts = await getBlogSectionPosts(100)

		let props = { posts: posts }
		props = JSON.parse(JSON.stringify(props))

		return { props, revalidate: 60 * 60 * 1 }
	} catch (err) {
		throw err
	}
}

export default function BlogPage({ posts }: { posts: BlogGridItemProps[] }) {
	return (
		<>
			<PageHeroComponent title='blog' description='blog: artigos + informativos + releases' backgroundUrl='/img/pages/blog.jpg'>
				<section>
					<div className='showcase'>
						<div className='row'>
							<div className='col-md-10'>
								<h2>📰 Outras postagens</h2>
							</div>
						</div>
						<BlogGrid posts={posts} />
					</div>
				</section>
			</PageHeroComponent>

			<ProfileComponent />
			<FooterComponent />
		</>
	)
}
