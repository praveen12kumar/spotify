interface LogoImageProps {
    width: number;
    height: number;
}

import logo from "../../../assets/images/logo.png";


const LogoImage : React.FC<LogoImageProps> = ({width, height}) => {
  return (
   
        <img className="rounded-full border-none bg-white" src={logo} alt="logo" width={width} height={height} />
   
  )
}

export default LogoImage
