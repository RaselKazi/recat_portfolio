import React, { useState } from 'react';
// import { FooterHeightContext } from '../../App';
import './HowItSlider.css';
import Left from '../../images/left.svg';
import Right from '../../images/right.svg';

const HowItSlider = (props) => {
    const right = props.right.right;
    const howItArray = props.howItArray;
    console.log('Right:', right);
    const [selected, setSelected] = useState(0);
    const [imgSel, setImgSel] = useState("https://i.ibb.co/LN2LCMz/howitworks1sg.png");
    const [id, setId] = useState(1);
       
    const sliderArray =[
        {
            id: 1,
            img: "https://i.ibb.co/LN2LCMz/howitworks1sg.png"
        },
        {
            id: 2,
            img: "https://i.ibb.co/CQH0crZ/howitworks2sg.png"
        },
        {
            id: 3,
            img: "https://i.ibb.co/BVkFgNC/howitworks3sg.png"
        },
        {
            id: 4,
            img: "https://i.ibb.co/TMJktDW/howitworks4sg.png"
        }
    ]

    const eventValue =(e)=>{
        var id = e.currentTarget.attributes['id'].value;
        const found = sliderArray.find(element => element.id == id);
        setImgSel(found.img);
        setId(found.id);
    }

    const handleAssigneeOnClickMinus = () => {
        setSelected(prev => {
            if (prev === 0) {
                return sliderArray.length -1;
            }
            if(prev>= 1){
                return prev - 1
            }
          });
          var sel = sliderArray[selected];
          setImgSel(sel.img);
          setId(sel.id);
      };
    const handleAssigneeOnClickAdd = () => {
        setSelected(prev => {
          if (prev === sliderArray.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
        var sel = sliderArray[selected];
        setImgSel(sel.img);
        setId(sel.id);
      };
      const backgroundBlue ={
          background: '#222222',
          color: 'white'
      }
      const backgroundWhite ={
          background: 'white',
          color: '#222222'
      }
    return (
        <section className="howitslider_area bg-white">
            {/* <div className="container"> */}
                    {
                        right ? <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <div className="howit_details py-4">
                                <ul className="list-unstyled" id="howit_details_ul">
                                  {
                                    howItArray.map(how => (
                                      <li key={how.id} id={how.id} onClick={(e) => eventValue(e)} className="d-flex mb-3">
                                          <div className="serial_num" style={(()=> {
                                             if (id === how.id) {
                                               return backgroundBlue;
                                             }
                                          })()}>{how.id}</div>
                                          <div className="how_it_box">
                                              <h6 className="h6-responsive">{how.title}</h6>
                                              <p className="p-responsive">{how.sub}</p>
                                          </div>
                                      </li>
                                    ))
                                  }
                                </ul>
                            </div>
                        </div>
                       <div className="col-md-5 col-sm-12 howit_slider py-4">
                            <ul className="list-unstyled list-inline d-flex justify-content-center align-items-center">
                                <li onClick={()=> handleAssigneeOnClickMinus()} className="list-inline-item left_arrow"><img src={Left} alt={Left}/></li>
                                <li className="list-inline-item w-50"><img className="w-100" src={imgSel} alt={imgSel}/></li>
                                <li onClick={() => handleAssigneeOnClickAdd()} className="list-inline-item right_arrow"><img src={Right} alt={Right}/></li>
                            </ul>
                        </div>
                    </div> : <div className="row">
                        <div className="col-md-5 col-sm-12 howit_slider">
                             <ul className="list-unstyled list-inline d-flex justify-content-center align-items-center">
                                 <li onClick={()=> handleAssigneeOnClickMinus()} className="list-inline-item left_arrow"><img src={Left} alt={Left}/></li>
                                 <li className="list-inline-item w-50"><img className="w-100" src={imgSel} alt={imgSel}/></li>
                                 <li onClick={() => handleAssigneeOnClickAdd()} className="list-inline-item right_arrow"><img src={Right} alt={Right}/></li>
                             </ul>
                         </div>
                         <div className="col-md-7 col-sm-12">
                             <div className="howit_details py-4">
                                 <ul className="list-unstyled" id="howit_details_ul">
                                  {
                                    howItArray.map(how => (
                                      <li key={how.id} id={how.id} onClick={(e) => eventValue(e)} className="d-flex mb-3">
                                          <div className="serial_num" style={(()=> {
                                             if (id === how.id) {
                                               return backgroundBlue;
                                             }
                                          })()}>{how.id}</div>
                                          <div className="how_it_box">
                                              <h6 className="h6-responsive">{how.title}</h6>
                                              <p className="p-responsive">{how.sub}</p>
                                          </div>
                                      </li>
                                    ))
                                  }
                                 </ul>
                             </div>
                         </div>
                     </div>
                    }
            {/* </div> */}
        </section>
    );
};

export default HowItSlider;