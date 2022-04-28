import { Link } from "react-router-dom"

const myProduk = [
    { name: 'Pantai Salju', pictures: '/assets/img/pansal.png', description:"Destinasi wisata Salju Panas Dolok Tinggi Raja mempunyai lokasi tepatnya di Desa Dolok Merawan, Kecamatan Tapian Dolok, Kabupaten Simalumgun, Sumatera Utara. Wisata alam memang tidak pernah habis pesona dan popularitasnya, setiap liburan pasti banyak wisatawan yang lebih memilih untuk plesiran ke tempat terbuka yang alami." },
    { name: 'Pantai Salju', pictures: '/assets/img/pansal.png', description:"Destinasi wisata Salju Panas Dolok Tinggi Raja mempunyai lokasi tepatnya di Desa Dolok Merawan, Kecamatan Tapian Dolok, Kabupaten Simalumgun, Sumatera Utara. Wisata alam memang tidak pernah habis pesona dan popularitasnya, setiap liburan pasti banyak wisatawan yang lebih memilih untuk plesiran ke tempat terbuka yang alami." },
    { name: 'Pantai Salju', pictures: '/assets/img/pansal.png', description:"Destinasi wisata Salju Panas Dolok Tinggi Raja mempunyai lokasi tepatnya di Desa Dolok Merawan, Kecamatan Tapian Dolok, Kabupaten Simalumgun, Sumatera Utara. Wisata alam memang tidak pernah habis pesona dan popularitasnya, setiap liburan pasti banyak wisatawan yang lebih memilih untuk plesiran ke tempat terbuka yang alami." },
    { name: 'Pantai Salju', pictures: '/assets/img/pansal.png', description:"Destinasi wisata Salju Panas Dolok Tinggi Raja mempunyai lokasi tepatnya di Desa Dolok Merawan, Kecamatan Tapian Dolok, Kabupaten Simalumgun, Sumatera Utara. Wisata alam memang tidak pernah habis pesona dan popularitasnya, setiap liburan pasti banyak wisatawan yang lebih memilih untuk plesiran ke tempat terbuka yang alami." },
]

const Pariwisata =()=>{
    
    return(
        <div className=" container-fluid bg-light ">
            <div className="col-md-6 ml-auto mr-auto text-center mt-2">
                <h3>Pariwisata</h3>
            </div>
              <div className="col-md-12 d-flex justify-content-between">
                <div className="col-md-6">
                  <p>Berikut ini adalah lokasi pariwisata desa</p>
                </div>
                <Link to="/pariwisata">Lihat selengkap nya</Link>
                  
              </div>
              <div className={`row ml-auto mr-auto `}>
                  {myProduk.map((produk:any)=>(
                      <>
                        <div className="d-none d-md-block col-sm-3">
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
    )
}

export default Pariwisata