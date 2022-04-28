import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom"

const useStyles = createUseStyles({
    CardProduk:{
        fontSize: '14px' ,
        color: 'black',
        '&:hover': {
            backgroundColor:'#DCDCDC'
        },
        cursor: 'pointer',
        '&:nth-child(1)' : {
            dispaly: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
    // container: {
    //     background: 'linear-gradient(45deg, #f3f3f3, #f3f3f3, #b7b6e1, transparent)'    
    // }
})


const myProduk = [
    { name: 'sikarta', pictures: '/assets/img/sikarta.png', description:"Kopi sikarta adalah kopi asli buatan pemuda / pemudi karang taruna yang ada didaerah kutalimbaru, kopi ini diproduksi sendiri oleh pihak karang taruna desa kutalimbaru kecamatan bangun purba " },
    { name: 'sikarta', pictures: '/assets/img/sikarta.png', description:"Kopi sikarta adalah kopi asli buatan pemuda / pemudi karang taruna yang ada didaerah kutalimbaru, kopi ini diproduksi sendiri oleh pihak karang taruna desa kutalimbaru kecamatan bangun purba " },
    { name: 'sikarta', pictures: '/assets/img/sikarta.png', description:"Kopi sikarta adalah kopi asli buatan pemuda / pemudi karang taruna yang ada didaerah kutalimbaru, kopi ini diproduksi sendiri oleh pihak karang taruna desa kutalimbaru kecamatan bangun purba " },
    { name: 'sikarta', pictures: '/assets/img/sikarta.png', description:"Kopi sikarta adalah kopi asli buatan pemuda / pemudi karang taruna yang ada didaerah kutalimbaru, kopi ini diproduksi sendiri oleh pihak karang taruna desa kutalimbaru kecamatan bangun purba " }
]

const Produk =()=>{
    const classes=useStyles()
    const [showModal, setShow] = useState(false);
    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);
  
    const renderModal = () => (
      <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Pesan Sekarang</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-6 mr-auto ml-auto mb-3">
              <button className="btn btn-lg btn-success"  type="button">
              <span style={{fontSize:"1em"}}>
                <FaWhatsapp  /> Pesan via whatsapp
              </span>
              </button>
            </div>
            <div className="col-md-6 mr-auto ml-auto mb-3">
              <button className="btn btn-lg btn-success"  type="button" style={{backgroundColor:"#0804b9"}}>
              <span style={{fontSize:"1em"}}>
                <img src="/assets/img/Lazada-icon.svg" alt="lazada logo" style={{height:"1.5em"}} /> Pesan via Lazada
              </span>
              </button>
            </div>
            <div className="col-md-6 mr-auto ml-auto mb-3">
              <button className="btn btn-lg"  type="button" style={{backgroundColor:"#FF6600"}}>
              <span style={{fontSize:"1em", color:"white"}}>
                <img src="/assets/img/shopee.png" alt="shopee logo" style={{height:"1.5em"}} /> Pesan via shopee
              </span>
              </button>
            </div>
            <div className="col-md-6 mr-auto ml-auto mb-3">
              <button className="btn btn-lg"  type="button" style={{backgroundColor:"#42b549"}}>
              <span style={{fontSize:"1em", color:"white"}}>
              <img src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/berita-tokopedia-info-berita-terbaru-tokopedia-6.png" style={{height:"1.5em"}} alt="logo tokopedia" /> Pesan via tokopedia
              </span>
              </button>
            </div>
            
          </Modal.Body>
        
        </Modal>
  )
    return(
        <>
        <div className=" container-fluid bg-light ">
            <div className="col-md-6 ml-auto mr-auto text-center mt-2">
                <h3>Produk UMKM</h3>
                
            </div>
              <div className="col-md-12 d-flex justify-content-between">
                <div className="col-md-6">
                  <p>Berikut ini adalah produk unggulan dari Bumdes</p>
                </div>
                <Link to="/produk">Lihat selengkap nya</Link>
                  
              </div>
              <div className={`row ml-auto mr-auto mt-2`}>
                  {myProduk.map((produk:any)=>(
                      <>
                        <div className="d-none d-md-block col-sm-3">
                            <div className={`card ${classes.CardProduk}`} onClick={handleShowModal}>
                            <img className="card-img-top" src={produk.pictures} alt="card pict"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {produk.name}
                                </h5>
                                <p>{produk.description}</p>
                            </div>
                            </div>
                        </div>
                        <div className="d-block d-md-none col-sm-6 mb-2 mt-2">
                            <div className="card">
                            <img className="card-img-top" src={produk.pictures} alt="card pict"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {produk.name}
                                </h5>
                                <p>{produk.description}</p>
                            </div>
                            </div>
                        </div>
                      </>
                  ))}
              </div>
        </div>
        
        {renderModal()}
        </>
        
    )
}

export default Produk