import ExpImg1 from '../assets/images/resources/expImg1.jpg';
import StarRate from '../assets/images/5starRate.png';
import { ReactComponent as HomeIcon } from '../lib/icons/Home.svg';
import { ReactComponent as EnvelopeIcon } from '../lib/icons/Envelope.svg';
import { ReactComponent as PhoneIcon } from '../lib/icons/Phone.svg';

function getData(about, email, services, skills, timeline, projects, testimonials, social_handles, blogs) {
	const { name, title, subTitle, description, avatar, address, exp_year, phoneNumber } = about;
	const [firstName, lastName] = name?.split(' ');
	const education = [];
	const experience = [];
	const servicesStyle = [
		{
			bgColor: 'bg-accent',
			titleColor: 'text-white',
			descColor: 'text-white',
		},
		{
			bgColor: 'bg-[#f0e1d4]',
			titleColor: 'text-accent2',
			descColor: 'text-desc2',
		},
		{
			bgColor: 'bg-[#d4e4f0]',
			titleColor: 'text-accent2',
			descColor: 'text-desc2',
		},
		{
			bgColor: 'bg-gray',
			titleColor: 'text-accent2',
			descColor: 'text-desc2',
		},
		{
			bgColor: 'bg-[#f0fbfe]',
			titleColor: 'text-accent2',
			descColor: 'text-desc2',
		},
		{
			bgColor: 'bg-[#fef4f0]',
			titleColor: 'text-accent2',
			descColor: 'text-desc2',
		},
	];
	const portfolioStyle = [
		'basis-full md:basis-[41.57%] px-[.9375rem]',
		'basis-full md:basis-[58.3%] px-[.9375rem]',
		'basis-full md:basis-2/6 px-[.9375rem]',
		'basis-full md:basis-2/6 px-[.9375rem]',
		'basis-full md:basis-2/6 px-[.9375rem]',
		'basis-full md:basis-[58.3%] px-[.9375rem]',
		'basis-full md:basis-[41.57%] px-[.9375rem]',
	];

	const skillsStyle = [
		'pb-10 sm:pt-5 sm:pb-10 sm:pr-10 border-r-0 sm:border-r-[1px] border-b-[1px] border-[#9bb1cf]',
		'pb-10 pt-10 sm:pt-5 sm:pb-10 sm:pl-10 border-b-[1px] border-[#9bb1cf]',
		'pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-0 border-b-[1px] border-[#9bb1cf]',
		'pt-10 sm:pb-5 sm:pt-10 sm:pl-10',
	];

	timeline.forEach((entry) => {
		if (entry.enabled) {
			if (entry.forEducation) {
				education.push(entry);
			} else {
				experience.push(entry);
			}
		}
	});

	function formatDateRange(startDate, endDate, formate) {
		const startYear = new Date(startDate).getFullYear();
		const endYear = new Date(endDate).getFullYear();

		const startMonth = new Date(startDate).toLocaleString('default', { month: 'short' });
		const endMonth = new Date(endDate).toLocaleString('default', { month: 'short' });

		return formate === 'long' ? `${startMonth} ${startYear} - ${endMonth} ${endYear}` : `${startYear} - ${endYear}`;
	}
	return {
		heroData: {
			bgImgLink: '/images/background/hero-bg.jpg',
			imgLink: avatar.url,
			firstName: firstName,
			lastName: lastName,
			subTitle: 'Hello, I’m',
			designation: title,
			cvPdf: '/files/cv.pdf',
			text: "	We're an award-winning, forward thinking, boutique digital & creative in Edmonton, Canada.",
			text2: 'Our strategists, designers and coders work with clients from all over the world to build successful,',
		},
		aboutData: {
			imgLink: avatar.url,
			firstName: firstName,
			lastName: lastName,
			subtitle: subTitle,
			text: description,
			designation: title,
			details: [
				{
					title: 'exp year',
					info: exp_year,
				},
				{
					title: 'Phone',
					info: phoneNumber,
				},
				{
					title: 'Email',
					info: email,
				},
				{
					title: 'ADDRESS',
					info: address,
				},
				{
					title: 'Language',
					info: 'English, Germanic',
				},
				{
					title: 'Freelance',
					info: 'Available',
				},
			],
		},
		serviceData: {
			subTitle: 'What We Do',
			serviceDesc:
				'As a React developer with 5 years of experience and  My focus is on developing user-friendly applications that solve real-world problems.',
			services: services.map((service, index) => {
				return (
					service.enabled && {
						id: index + 1,
						servIcon: service.image.url,
						servTitle: service.name,
						servDesc: service.desc,
						charge: service.charge,
						bgColor: servicesStyle[index].bgColor,
						titleColor: servicesStyle[index].titleColor,
						descColor: servicesStyle[index].descColor,
					}
				);
			}),
		},
		skillData: {
			title: 'All the skills that I have in that field of work are mentioned.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
			skills: skills.map((skill, index) => {
				return (
					skill.enabled && {
						skillTitle: skill.name,
						skillPercent: skill.percentage + '%',
						image: skill.image.url,
						skillBox: skillsStyle[index],
					}
				);
			}),
		},
		portfolioData: projects.map((project, index) => {
			return (
				project.enabled && {
					id: index + 1,
					postAuthor: name,
					portBox: portfolioStyle[index],
					portSubTitle: project.description,
					postDate: project.createdAt || 'August 02, 2022',
					portImg: project.image.url,
					portTitle: project.title,
					liveurl: project.liveurl,
					githuburl: project.githuburl,
					techStack: project.techStack,
					portInfoList: [
						{
							title: 'Live:',
							value: project.liveurl || 'Not Available',
						},
						{
							title: 'GitHub:',
							value: project.githuburl || 'Not Available',
						},
						{
							title: 'Date:',
							value: 'August 02, 2022',
						},
					],
					portDesc:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Home renovations, especially those involving plentiful of demolition can be a very dusty affair. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds of all making mistakes.',
					portDesc2:
						'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.',
					portDesc3:
						'Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.',
					portDesc4:
						"The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.",
					portTitle2: 'What makes the best co-working space?',
					portInfoList2: [
						'Quis Nostrud Exercitation Ullamco Laboris.',
						'Ullamco Laboris Nisi Ut Aliquip.',
						'Reprehenderit In Voluptate Velit.',
						'Accusantium Doloremque Laudantium.',
						'Voluptate Velit Esse Cillum.',
					],
				}
			);
		}),
		blogData: {
			useFor: 'blog',
			sliderSetting: {
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							autoplay: true,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							autoplay: true,
						},
					},
				],
			},
			informations: blogs?.map((blog) => {
				return (
					blog.enabled && {
						imgLink: blog.image.url,
						designation: 'Admin',
						date: blog.createdAt,
						title: blog.title,
						href: '/blog/blog-details',
					}
				);
			}),
			// 	{
			// 		imgLink: './images/blog/blog1.jpg',
			// 		designation: 'Admin',
			// 		date: '07-03-2023',
			// 		title: 'latest trends in Graphic design according to you?',
			// 		href: '/blog/blog-details',
			// 	}
		},
		reviewData: {
			useFor: 'review',
			sliderSetting: {
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							autoplay: true,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							autoplay: true,
						},
					},
				],
			},
			informations: testimonials.map((testimonial) => {
				return (
					testimonial.enabled && {
						testiImg: testimonial.image.url,
						testiTitle: testimonial.name,
						testiDesi: testimonial.position,
						testiDesc: testimonial.review,
						testiRate: StarRate,
					}
				);
			}),
		},
		resumeData: {
			experienceTitle: 'Experience',
			experience: experience.map((exp, index) => {
				return {
					expCount: index + 1,
					expTitle: exp.company_name,
					expDate: formatDateRange(exp.startDate, exp.endDate, 'long'),
					expImg: exp?.icon?.url || ExpImg1,
					expSubTitle: exp.jobTitle,
					expDesc: exp.summary,
				};
			}),
			educationTitle: 'Education',
			education: education.map((educ) => {
				return {
					eduTitle: educ.jobTitle,
					eduDate: formatDateRange(educ.startDate, educ.endDate),
					eduIns: educ.jobLocation,
					eduDesc: educ.summary,
				};
			}),
		},
		contactData: {
			formTitle: 'Just say Hello',
			title: 'Contact Info',
			conInfo: [
				{
					conIcon: <HomeIcon className="h-[3.4375rem] fill-white"></HomeIcon>,
					conTitle: 'Address',
					conCap: address,
				},
				{
					conIcon: <EnvelopeIcon className="h-[3.4375rem] fill-white"></EnvelopeIcon>,
					conTitle: 'Email',
					conCap: email,
				},
				{
					conIcon: <PhoneIcon className="h-[3.4375rem] fill-white"></PhoneIcon>,
					conTitle: 'Phone',
					conCap: phoneNumber,
				},
			],
			subTitle: 'Visite my social profile and get connected',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.',
		},
		socialData: social_handles.map((social, index) => {
			return (
				social.enabled && {
					socialIcon: social.image?.url,
					socialTitle: social.platform,
					socialLink: social.url,
				}
			);
		}),
	};
}

export default getData;
