import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';
import { BlogDetail, BlogPage, BlogPage2 } from '../pages/BlogPages';
import { ContactPage } from '../pages/ContactPage';
import { ErrorPage } from '../pages/ErrorPage';
import { HomePage, HomePage2 } from '../pages/HomePages';
import { PlansPage } from '../pages/PlansPage';
import { PortfolioDetail, PortfolioPage, PortfolioPage2, PortfolioPage3 } from '../pages/PortfolioPages';
import { ServiceDetail, ServicePage } from '../pages/ServicePages';

const RouterLinks = ({ data }) => {
	return (
		<>
			<BrowserRouter>
				<SmoothScroll>
					<Routes>
						<Route path="/" element={<HomePage data={data} />} />
						<Route path="/home2" element={<HomePage2 data={data} />} />
						<Route path="/blog" element={<BlogPage data={data} />} />
						<Route path="/blog2" element={<BlogPage2 data={data} />} />
						<Route path="/blog/:Id" element={<BlogDetail data={data} />} />
						<Route path="/plans" element={<PlansPage />} />
						<Route path="/service" element={<ServicePage data={data} />} />
						<Route path="/service/:Id" element={<ServiceDetail data={data} />} />
						<Route path="/portfolio" element={<PortfolioPage data={data} />} />
						<Route path="/portfolio2" element={<PortfolioPage2 data={data} />} />
						<Route path="/portfolio3" element={<PortfolioPage3 data={data} />} />
						<Route path="/portfolio/:Id" element={<PortfolioDetail data={data} />} />
						<Route path="/contact" element={<ContactPage data={data} />} />
						<Route path="/404" element={<ErrorPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</SmoothScroll>
			</BrowserRouter>
		</>
	);
};

export default RouterLinks;
