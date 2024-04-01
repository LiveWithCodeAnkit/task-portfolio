import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { AboutUs2 } from '../../components/AboutUs';
import { Education2 } from '../../components/Education';
import { Header2 } from '../../components/Header';
import { Services2 } from '../../components/Services';
import { Partners2 } from '../../components/Partners';
import { Testimonials2 } from '../../components/Testimonials';
import { VideoBox } from '../../components/VideoBoxes';
import { MyExperienceAndSkills } from '../../components/MyExperienceAndSkills';
import { FunFacts } from '../../components/FunFacts';
import { Portfolio2 } from '../../components/Portfolio';
import { FreelanceWork2 } from '../../components/FreelanceWork';
import { PriceTable } from '../../components/PriceTable';
import { BlogPost2 } from '../../components/BlogPosts';
import { ContactUs2 } from '../../components/ContactUs';
import { BottomBar } from '../../components/BottomBar';

const HomePage2 = ({ data }) => {
	console.log(data);
	return (
		<Fragment>
			<Helmet>
				<title>Home 2 - Fastone Personal Portfolio or CV/Resume React App</title>
			</Helmet>
			<Header2 />
			<AboutUs2 aboutData={data.aboutData} />
			<Services2 serviceData={data.serviceData} />
			<VideoBox />
			<Education2 resumeData={data?.resumeData} />
			<MyExperienceAndSkills data={data} />
			<FunFacts />
			<Portfolio2 portfolioData={data?.portfolioData} />
			<FreelanceWork2 />
			<PriceTable />
			{/* <Partners2 /> */}
			<Testimonials2 reviewData={data.reviewData} />
			<BlogPost2 portfolioData={data?.portfolioData} />
			<ContactUs2 contactData={data.contactData} socialData={data.socialData} />
			<BottomBar />
		</Fragment>
	);
};

export default HomePage2;
