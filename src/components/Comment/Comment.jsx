import PatternImg2 from '../../assets/images/patternImg2.jpg';

const Comment = ({ reviewData }) => {
	return (
		<div className="commentsWrap my-10 relative w-full">
			<h3 className="text-[1.5rem] md:text-[1.875rem] font-Poppins font-bold text-accent2 text-center sm:text-left uppercase mb-[.9375rem]">
				2 Comments
			</h3>
			<ul className="comments w-full">
				<li>
					<div className="commentBox items-center p-[.9375rem] sm:py-[.9375rem] sm:pr-20 sm:pl-0 flex flex-col md:flex-row justify-center md:justify-start text-center md:text-left gap-[1.875rem] relative w-full">
						<div
							className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 md:left-[3.75rem] sm:left-10 left-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
							style={{ backgroundImage: `url(${PatternImg2})` }}
						></div>
						<div className="commentImg rounded-[10px] sm:rounded-[1.25rem] max-w-[7.1875rem] w-full overflow-hidden">
							<img
								className="w-full"
								src={reviewData.informations[0].testiImg}
								alt="Comment Mockup"
							></img>
						</div>
						<div className="commentInfo flex flex-col justify-center sm:justify-start  gap-2">
							<h5 className="text-accent2 font-semibold font-Poppins text-[1.125rem] flex items-center justify-center sm:justify-start gap-2">
								{reviewData.informations[0].testiTitle + ' '}
								<span className="text-accent uppercase text-[14px] font-NunitoSans font-extrabold">
									10 Months Ago
								</span>
							</h5>
							<p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.0625rem] leading-normal">
								{reviewData.informations[0].testiDesc}
							</p>
							<a
								className="sm:absolute static text-white bg-accent flex justify-center items-center uppercase rounded-b-lg sm:rounded-b-lg min-w-[4.375rem] h-[1.875rem] font-Poppins font-bold text-[13px] hover:bg-accent2 hover:text-white right-[3.125rem] top-0"
								href="/"
								title=""
								rel="noreferrer"
							>
								Reply
							</a>
						</div>
						{/* Comment Box */}
					</div>
					<ul className="pl-0 sm:pl-[3.125rem] mt-5">
						<li>
							<div className="commentBox items-center p-[.9375rem] sm:py-[.9375rem] sm:pr-20 sm:pl-0 flex flex-col md:flex-row justify-center md:justify-start text-center md:text-left gap-[1.875rem] relative w-full">
								<div
									className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 md:left-[3.75rem] sm:left-10 left-0 bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
									style={{ backgroundImage: `url(${PatternImg2})` }}
								></div>
								<div className="commentImg rounded-[10px] sm:rounded-[1.25rem] max-w-[7.1875rem] w-full overflow-hidden">
									<img
										className="w-full"
										src={reviewData.informations[1].testiImg}
										alt="Comment Mockup"
									></img>
								</div>
								<div className="commentInfo flex flex-col justify-center sm:justify-start gap-4 sm:gap-2">
									<h5 className="text-accent2 font-semibold font-Poppins text-[1.125rem] flex items-center justify-center sm:justify-start gap-2">
										{reviewData.informations[1].testiTitle + ' '}
										<span className="text-accent uppercase text-[14px] font-NunitoSans font-extrabold">
											10 Months Ago
										</span>
									</h5>
									<p className="font-NunitoSans text-desc2 text-[1rem] md:text-[1.0625rem] leading-normal">
										{reviewData.informations[1].testiDesc}
									</p>
									<a
										className="sm:absolute static text-white bg-accent flex justify-center items-center uppercase rounded-b-lg sm:rounded-b-lg min-w-[4.375rem] h-[1.875rem] font-Poppins font-bold text-[13px] hover:bg-accent2 hover:text-white right-[3.125rem] top-0"
										href="/"
										title=""
										rel="noreferrer"
									>
										Reply
									</a>
								</div>
								{/* Comment Box */}
							</div>
						</li>
					</ul>
				</li>
				{/* Comments */}
			</ul>
			{/* Comments Wrap */}
		</div>
	);
};

export default Comment;
