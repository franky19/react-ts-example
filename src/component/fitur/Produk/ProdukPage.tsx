import CardProduk from './CardProduk';

const ProdukPage = () => {
    return(
        <div className={`container-fluid bg-light`}  >
        <div className='row h-100 my-3 my-md-0 d-flex align-items-center justify-content-center position-relative'>
            <div className='col-md-12 d-flex align-items-center justify-content-center mt-5' style={{marginLeft:"6em"}} >
                <CardProduk />
            </div>
        </div>
    </div>
    )
}
export default ProdukPage