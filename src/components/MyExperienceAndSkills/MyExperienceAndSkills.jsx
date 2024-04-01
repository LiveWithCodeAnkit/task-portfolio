import { MyWorkExperience2 } from '../MyWorkExperience';
import { Skills2 } from '../Skills';

const MyExperienceAndSkills = ({ data }) => {
	const { resumeData, skillData } = data;
	return (
		<section className="expSkillWrap grid xl:grid-cols-2 grid-cols-1 relative w-full">
			<MyWorkExperience2 resumeData={resumeData} />
			<Skills2 skillData={skillData} />
		</section>
	);
};

export default MyExperienceAndSkills;
