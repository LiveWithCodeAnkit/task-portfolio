import { Link } from 'react-router-dom';
import PatternImg from '../../assets/images/patternImg3.jpg';
import { SectionTitle } from '../SectionTitles';

import './BlogPost.css';

const BlogPost = ({ portfolioData }) => {
	return (
		<section className="postsWrap py-[5rem] sm:py-[6rem] md:py-[7.5rem] relative w-full">
			<div
				className="fixedBg bg-left-top bg-no-repeat opacity-20"
				style={{ backgroundImage: `url(${PatternImg})` }}
			></div>
			<div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
				<SectionTitle
					title="Featured"
					titleInner="Posts"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
				></SectionTitle>
				<div className="postsList grid gap-[1.875rem] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative w-full">
					{portfolioData?.map(
						(item, index) =>
							index < 3 && (
								<div className="card" key={index}>
									<div className="front">
										<img
											className="w-full h-full absolute object-cover"
											src={item.portImg}
											alt={item.portTitle}
										></img>
										<div className="frontDetials">
											<h2>{item.portTitle}</h2>
											<button>Hover me</button>
										</div>
									</div>
									<div className="back">
										<h1>{item.portTitle}</h1>
										<p>{item.portSubTitle}</p>
										<Link className="backlink" to={`blog/${index + 1}`}>
											View More
										</Link>
									</div>
								</div>
							)
					)}
					{/* Posts List */}
				</div>
				<div className="viewAll text-center w-full mt-[3.125rem] md:mt-[4.0625rem]">
					<p className="text-desc2 font-NunitoSans text-[1rem] md:text-[1.125rem]">
						Want to see my professional work.{' '}
						<Link
							className="text-accent font-Poppins font-medium hover:text-accent2 underline underline-offset-8"
							to="/blog"
							title="Click here to View More"
						>
							Click here to View More
						</Link>
					</p>
					{/* View All */}
				</div>
			</div>
		</section>
	);
};

export default BlogPost;
