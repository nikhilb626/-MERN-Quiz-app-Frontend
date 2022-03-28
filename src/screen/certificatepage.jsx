import Certi from '../components/certi';
import React, {useRef} from "react";
import  {useReactToPrint} from "react-to-print";
import Navbar from '../components/navbar';

function Certificatepage() {




    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (<>

<Navbar />
      
      <div className="printBtn">
      <Certi ref={componentRef} />

      <button onClick={handlePrint}>Download  <i class="fa-solid fa-download"></i></button>

      
    </div> 

      </>
  )
};

export default Certificatepage;




