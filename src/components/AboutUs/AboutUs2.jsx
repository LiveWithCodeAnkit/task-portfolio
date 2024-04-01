import PatternImg2 from '../../assets/images/patternImg2.jpg';
import SectionBg from '../../assets/images/secBg6.jpg';
import AboutImg from '../../assets/images/resources/aboutImg.jpg';
import { ReactComponent as Signature } from '../../lib/icons/Signature.svg';

const AboutUs2 = ({ aboutData }) => {
	return (
		<section className="aboutUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] md:pb-0 relative w-full z-[1]">
			<div
				className="fixedBg before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-90 before:z-[1] bg-blend-multiply absolute inset-0 bottom-0 sm:bottom-[5.5rem] md:bottom-[7rem] lg:bottom-[8.125rem] bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
				style={{ backgroundImage: `url(${PatternImg2})` }}
			></div>
			<div className="container sm:container md:container lg:container xl:container 2xl:max-w-[110.3125rem] mx-auto">
				<div className="aboutUsInner p-5 md:p-10 lg:pb-0 xl:pt-[6.25rem] relative w-full">
					<div
						className="fixedBg bg-center bg-cover bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg3 bg-blend-color-dodge rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden"
						style={{ backgroundImage: `url(${SectionBg})` }}
					></div>
					<div className="aboutData grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1 w-full max-w-[75rem] mx-auto">
						<div>
							<div className="aboutImg relative mb-0 lg:-mb-20">
								<img
									className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative z-[1] object-cover"
									src={aboutData.imgLink ? aboutData.imgLink : AboutImg}
									alt=""
								></img>
								{/* About Image */}
							</div>
						</div>
						<div>
							<div className="aboutCap relative z-[1] pt-0 xl:pt-5 pl-0 xl:pl-[4rem] pr-0">
								<h3 className="text-white font-normal text-[1.5rem] md:text-[1.875rem] lg:text-[2.2rem] leading-tight font-Caveat">
									Hello, I Am
								</h3>
								<h2 className="text-white font-bold text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4.375rem] leading-normal my-2 md:my-0 font-Poppins uppercase">
									{aboutData.firstName}{' '}
									<span className="text-accent font-normal">{aboutData.lastName}</span>
								</h2>
								<h5 className="justify-start font-bold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] font-Poppins text-white uppercase flex items-center gap-2.5 tracking-[1px]">
									<span className="w-[2.5rem] sm:w-[3rem] md:w-[4.375rem] bg-accent h-[1px]"></span>
									{aboutData.designation}
								</h5>
								<ul className="grid grid-cols-1 gap-3 sm:gap-5 mt-7">
									{aboutData.details.map((detail, index) => (
										<li
											className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]"
											key={index}
										>
											<strong className="text-white uppercase font-bold font-Poppins col-span-1">
												{detail.title}:
											</strong>
											<span className="text-desc font-semibold font-NunitoSans col-span-2">
												{detail.title === 'Phone' || detail.title === 'Email' ? (
													<a
														className="text-desc font-semibold font-NunitoSans hover:text-accent"
														href={
															detail.title === 'Phone'
																? `tel:${detail.info}`
																: `mailto:${detail.info}`
														}
														title={detail.info}
													>
														{detail.info}
													</a>
												) : (
													detail.info
												)}
											</span>
										</li>
									))}
								</ul>
								<Signature className="fill-accent h-14 md:h-[4.5rem] mt-5 md:mt-[2.375rem]"></Signature>
								{/* About Cap */}
							</div>
						</div>
						{/* About Data */}
					</div>
					{/* About Us Inner */}
				</div>
			</div>
			{/* About Us Wrap */}
		</section>
	);
};

export default AboutUs2;
