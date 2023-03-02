
import Children from './Children';
import HelpCard from './HelpCard';


function HowToHelp({ handleClickOnChildren }) {
    const descriptionOfHolidayCard = "It's true that outdoor activity is the best way to stimulate development. Here is our newest survival and science camp in Krynica-Zdrój!"
    const descriptionOfEducationCard = "We believe in power of modern education, interesting school aids, thematic activities - help us make learning an exciting adventure"
    const picOfHoliday = "https://montemlife.com/wp-content/uploads/2019/03/summercamp-1000x600.jpg"
    const picOfEducation = "https://i.gremicdn.pl/image/free/af5c10cffea0aa04f6e7d5a4366850e0/?t=resize:fill:408:255,enlarge:1"

    return <div className="donation-cards">
        <HelpCard classNameOfEle="education" title="Education" descrip={descriptionOfEducationCard} src={picOfEducation}></HelpCard>
        <Children handleClickOnChildren={handleClickOnChildren} />
        <HelpCard classNameOfEle="holiday" title="Holidays" descrip={descriptionOfHolidayCard} src={picOfHoliday}></HelpCard>
    </div>;

}

export default HowToHelp