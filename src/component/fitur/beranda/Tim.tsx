import { Link } from "react-router-dom"

const TimKami =()=>{
    return(
        <div className=" container-fluid bg-light ">
            <div className="col-md-6 ml-auto mr-auto text-center mt-2">
                <h3>Tim Kami</h3>
                
            </div>
              <div className="col-md-12 d-flex justify-content-between">
                <div className="col-md-6">
                  <p>Berikut ini adalah tim kami yang selalu mendukung BUMDES</p>
                </div>
                <Link to="/">Lihat selengkap nya</Link>
                  
              </div>
              <div className={`row ml-auto mr-auto mt-2`}>
                <div className="col-sm-4">
                    <div className="text-center">
                        <img className="img-direktur" src="/assets/img/iconAvatar.png" alt="direktur"/>
                        <h5>Anonymous</h5>
                        <h6>direktur</h6>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="text-center">
                        <img className="img-direktur" src="/assets/img/iconAvatar.png" alt="direktur"/>
                        <h5>Anonymous</h5>
                        <h6>Sekretaris</h6>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="text-center">
                        <img className="img-direktur" src="/assets/img/iconAvatar.png" alt="direktur"/>
                        <h5>Anonymous</h5>
                        <h6>Bendahara</h6>
                    </div>
                </div>
              </div>
        </div>
    )
}

export default TimKami