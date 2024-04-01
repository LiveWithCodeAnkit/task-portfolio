import { useEffect, useState } from 'react';
import RouterLinks from './router/Routes';
import { PushSpinner } from 'react-spinners-kit';
import getData from './data/main-data';

function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
				);
				const data = await response.json();
				if (data.success) {
					const { about, email, services, skills, timeline, projects, testimonials, social_handles, blogs } =
						data.user;

					const DataTemplate = getData(
						about,
						email,
						services,
						skills,
						timeline,
						projects,
						testimonials,
						social_handles,
						blogs
					);
					setData(DataTemplate);
				} else {
					console.error('Something went wrong');
				}
			} catch (error) {
				console.error('There was an error:', error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<div className="fastoneApp">
			{loading ? (
				<div className="pageLoader fixed justify-center items-center inset-0 flex">
					<PushSpinner className="bg-accent" size={60} color="#284be5"></PushSpinner>
				</div>
			) : (
				<RouterLinks data={data} />
			)}
		</div>
	);
}

export default App;
