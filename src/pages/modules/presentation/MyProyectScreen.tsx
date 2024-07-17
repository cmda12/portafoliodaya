import { FiArrowRight } from "react-icons/fi";
import PageWrapperCustom from "../../../components/common/page/custom/PageWrapperCustom";
import Slider from "react-slick";
import { useTheme } from "../../../hook/theme";
import { useLanguage } from "../../../hook/lenguage";
import proyectWeb from "../../../assets/yavirac-logo.png"; 
import ProyectWeb1 from "../../../assets/toc-systems-logo.png";

const MyProyectScreen = () => {
    const { isDarkTheme } = useTheme();
    const { translations } = useLanguage();
  
    const proyect = [
      {
        institution: translations['project.elections.institution'],
        proyect: translations['protect.elections.name'],
        description: translations['proyect.elections.description'],
        status: translations['protect.elections.status'],
        location: "Ecuador, Ecuador",
        image: proyectWeb,
        pageUrl: "https://drive.google.com/file/d/1M-Hdez0Ul358gBs1qPZVGH3bpfcc3Wzb/view?usp=sharing"
      },
      {
        institution: translations['project.menu.institution'],
        proyect: translations['protect.menu.name'],
        description: translations['proyect.menu.description'],
        status: translations['protect.menu.status'],
        location: "Ecuador, Quito",
        image: ProyectWeb1,
        pageUrl: "https://drive.google.com/file/d/1FVYfRd30fsz3ld0BGRAIfTOrr2Fe_V2s/view?usp=sharing" 
      },
      {
        institution: translations['project.game.institution'],
        proyect: translations['protect.game.name'],
        description: translations['proyect.game.description'],
        status: translations['protect.game.status'],
        location: "Ecuador, Quito",
        image: ProyectWeb1,
        pageUrl: "#" 
      },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    };
  
    return (
      <PageWrapperCustom>
        <div
          className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${
            isDarkTheme ? "bg-dark-primary text-white" : "bg-light-primary text-black"
          }`}
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <Slider {...settings}>
            {proyect.map((proyects, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-4 py-10 ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                <div className="flex justify-center items-center w-48 h-48 mb-4">
                  <img
                    src={proyects.image}
                    alt={`${proyects.institution} logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-2">{proyects.institution}</h2>
                  <p className="text-lg font-medium mb-2">{proyects.proyect}</p>
                  {proyects.description && (
                    <p className="text-base mb-2">{proyects.description}</p>
                  )}
                  <p className="text-sm mb-1">{proyects.status}</p>
                  <p className="text-sm">{proyects.location}</p>
                  <a
                    href={proyects.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-sm text-primary mt-2"
                  >
                    {translations['work.visit_page']} <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </PageWrapperCustom>
    );
}

export default MyProyectScreen;