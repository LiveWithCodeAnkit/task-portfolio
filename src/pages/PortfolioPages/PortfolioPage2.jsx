import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BottomBar2 } from '../../components/BottomBar';
import { ContactUs2 } from '../../components/ContactUs';
import { FreelanceWork3 } from '../../components/FreelanceWork';
import { Header2 } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { Pagination2 } from '../../components/Pagination';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FiCircle } from 'react-icons/fi';
import Fancybox from '../../fancybox';

const filterList = [
	{
		filterItem: 'All',
		filterLink: '/#',
	},
	{
		filterItem: 'Graphic',
		filterLink: '/#',
	},
	{
		filterItem: 'Development',
		filterLink: '/#',
	},
	{
		filterItem: 'Illustration',
		filterLink: '/#',
	},
	{
		filterItem: 'Figma',
		filterLink: '/#',
	},
];

const PortfolioPage2 = ({ data }) => {
	const { portfolioData, contactData, socialData } = data;
	const [filter, setFilter] = useState('all');
	// const [portfolios, setPortfolios] = useState([]);

	// useEffect(() => {
	//   setPortfolios(portfolios);
	// }, []);

	// useEffect(() => {
	//   setPortfolios([]);

	//   const filtered = portfolios.map((p) => ({
	//     ...p,
	//     filtered: p.portCate.includes(filter),
	//   }));
	//   setPortfolios(filtered);
	// }, [filter]);

	const portfolioBoxStyle = [
		'basis-full md:basis-[28.625%] px-[.9375rem]',
		'basis-full md:basis-[28.625%] px-[.9375rem]',
		'basis-full md:basis-[42.75%] px-[.9375rem]',
		'basis-full md:basis-[42.75%] px-[.9375rem]',
		'basis-full md:basis-[28.625%] px-[.9375rem]',
		'basis-full md:basis-[28.625%] px-[.9375rem]',
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>Portfolio - Fastone Personal Portfolio or CV/Resume React App</title>
			</Helmet>
			<Header2></Header2>
			<PageTitle title="Portfolio" hometitle="Home" homeURL="/" currentPage="Portfolio"></PageTitle>
			<FreelanceWork3 />
			<section className="pageWrap pt-20 pb-[6.875rem] relative w-full">
				<div className="container sm:container md:container lg:container xl:max-w-[85.625rem] mx-auto">
					<div className="pageInner grid gap-10 md:gap-20 grid-cols-1 w-full">
						<ul className="filterList flex flex-wrap justify-center items-center">
							{filterList.map(
								(item, index) =>
									index < 5 && (
										<li key={index}>
											<Link
												className="group flex items-center justify-center font-Poppins font-semibold text-[1rem] md:text-[1.25rem] text-accent2 py-[12px] px-[1.375rem] gap-2 relative hover:pr-11 hover:bg-accent hover:text-white rounded-[5px] md:rounded-[10px] cursor-pointer transition-all ease-linear"
												to={item.filterLink}
												title={item.filterItem}
												active={(filter === item.filterItem).toString()}
												onClick={() => setFilter(item.filterItem)}
											>
												{item.filterItem}
												<FiChevronDown className="font-bold absolute right-[1.375rem] opacity-0 group-hover:opacity-100"></FiChevronDown>
											</Link>
										</li>
									)
							)}
						</ul>
						<Fancybox>
							<div className="portList flex flex-wrap relative mx-[-.9375rem]">
								{portfolioData.map(
									(portfolio, index) =>
										index < 6 && (
											<div
												key={index}
												className={portfolioBoxStyle[index]}
												style={{ margin: '10px 0' }}
											>
												<div className="portBox group before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] before:z-[1] text-center w-full">
													<img
														className="w-full h-auto rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem]"
														src={portfolio.portImg}
														alt="Portfolio Mockup"
													></img>
													<div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
														<a
															className="inline-flex items-center justify-center"
															href={portfolio.portImg}
															title="Portfolio Image"
															data-fancybox="gallery"
														>
															<FiCircle
																className="stroke-[2] stroke-white"
																size={32}
															></FiCircle>
														</a>
													</div>
												</div>
											</div>
										)
								)}

								{/* Portfolio List */}
							</div>
						</Fancybox>
						<Pagination2 />

						{/* Page Inner */}
					</div>
				</div>
				{/* Page Wrap */}
			</section>
			<ContactUs2 contactData={contactData} socialData={socialData} />
			<BottomBar2></BottomBar2>
		</React.Fragment>
	);
};

export default PortfolioPage2;
