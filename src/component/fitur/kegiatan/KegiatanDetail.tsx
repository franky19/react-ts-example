import { createUseStyles } from "react-jss"
import {BiTime,BiComment} from 'react-icons/bi'
import { Link} from "react-router-dom"

const useStyles = createUseStyles({
    detailInformasi: {
        fontSize: '16px'
    }
})


const myActivity = [
    {id:1, title: 'Pelatihan kerajinan tangan', pictures: '/assets/img/kerajinan.jpg', date:"09-04-2022", writer:"anonymous", totalComment:"tidak ada komentar" },
    {id:2, title: 'Pelatihan kerajinan tangan', pictures: '/assets/img/kerajinan.jpg', date:"29-04-2021", writer:"anonymous", totalComment:"tidak ada komentar" },
]

const Kegiatan = () => {
    const classes=useStyles()
    return(
        <div className='container-fluid my-4 mr-3 ml-4' >
        <div className='row ' >
            <div className='col-12 ' >
                <div className='card p-2 ' >
                    <div className='container mt-4 mt-md-5 ' >
                        <div className='row mb-4 ' >
                            <div id="detailInformasi" className={classes.detailInformasi} style={{maxWidth:"45rem"}}>
                                {/* <</h3> */}
                                <h5 className="card-title">Pelatihan kerajinan tangan</h5>
                                        <div className="d-flex bd-highlight mb-3">
                                        <div className="p-2 bd-highlight border-right"><BiTime /> 10-04-2022</div>
                                        <div className="p-2 bd-highlight ">Post by : anonymous</div>
                                        <div className="ml-auto p-2 bd-highlight"><BiComment /> Tidak ada komentar</div>
                                        </div>
                                        <img src="/assets/img/kerajinan.jpg" className="card-img-top" alt="sosialiasi pembuatan kerajinan tangan" style={{width:"100%",height:"auto"}}/>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue nisl in auctor tincidunt. Suspendisse aliquam, erat in venenatis faucibus, augue leo condimentum lectus, id placerat enim neque ut quam. Donec facilisis non elit id blandit. Morbi tortor ante, mollis tincidunt ultrices at, rutrum sed urna. Morbi odio leo, viverra quis ullamcorper eu, scelerisque id diam. Vivamus nec rhoncus mi. Etiam sed consectetur neque, ut malesuada neque. Aliquam pharetra turpis suscipit quam accumsan, vitae aliquam purus ultrices. Curabitur bibendum massa vel libero feugiat auctor. Maecenas ut interdum odio.

                                        Sed tristique dignissim neque, eu malesuada tellus elementum ac. Donec ac viverra eros. Suspendisse porttitor quam non fermentum blandit. Duis ac elit sit amet turpis condimentum cursus. In tortor sem, egestas quis pulvinar ac, consequat nec mi. Vestibulum eleifend nulla ac libero iaculis tempus. Vivamus malesuada mollis dictum. Donec mattis lacinia sem ut gravida. Nulla efficitur sem neque. Suspendisse condimentum vel tellus non placerat. Phasellus id orci non sapien pulvinar vehicula. Nunc imperdiet vel felis at dictum. Aliquam erat volutpat. Quisque tristique, odio ac vestibulum tincidunt, metus ante eleifend urna, vel sollicitudin ex leo ut ligula. Cras quis semper lacus.

                                        Phasellus auctor odio ac odio lobortis semper. Mauris sapien tortor, sollicitudin eget quam non, fermentum condimentum tellus. Integer facilisis massa imperdiet vestibulum condimentum. Duis lorem odio, iaculis eu ultricies at, mollis ut massa. Etiam interdum quam vitae quam malesuada, in convallis massa mattis. Ut condimentum diam nec nulla varius sagittis. Nam dignissim sapien ut augue consequat, eu pretium magna tincidunt. Mauris et mollis est. In quis libero a arcu aliquam feugiat ut vel lorem. Vestibulum metus mi, volutpat nec ante vitae, eleifend tristique quam. Suspendisse id odio velit.

                                        Mauris neque diam, semper nec urna in, aliquet pellentesque sapien. Ut ornare eget tellus in pulvinar. Nam augue tortor, volutpat vel quam eu, porta fringilla nisl. Vestibulum augue nunc, venenatis eu nibh quis, venenatis consequat sem. Donec ex velit, eleifend vitae finibus eget, vehicula eu tortor. Nunc sed nibh vel ligula blandit feugiat eu eu neque. Duis aliquam nisi in ante efficitur bibendum. Quisque tincidunt, nisi ac faucibus semper, leo ex luctus nibh, a fermentum nisl lacus id mi. Phasellus vehicula justo at mi iaculis bibendum. Suspendisse velit risus, sodales dapibus vehicula vitae, iaculis sed turpis. Proin fermentum efficitur mi eu malesuada. Aenean iaculis metus ut malesuada lobortis. Aliquam erat volutpat. Sed venenatis eleifend lorem, a sollicitudin est condimentum sed. Vivamus fermentum sagittis dui eget ornare.

                                        Vivamus blandit magna orci, non porttitor justo pharetra rhoncus. Quisque blandit dapibus lacinia. Aliquam vel dui at nibh imperdiet ullamcorper ut sed lectus. Phasellus in iaculis sem. Aliquam vel nulla urna. In laoreet vel dolor vel suscipit. Mauris id feugiat orci, vel aliquet arcu. Quisque nibh arcu, porta quis ullamcorper non, vestibulum vel libero. Suspendisse potenti. Nulla facilisi. Praesent tempor consequat lacinia. Proin eget mauris dapibus, porta justo vel, suscipit leo. Curabitur condimentum enim eget nibh scelerisque laoreet. Pellentesque efficitur orci nunc, sagittis vehicula ipsum iaculis sed. Aliquam consequat ex vitae risus viverra, quis pharetra enim eleifend. Pellentesque dignissim metus sed massa consequat, vestibulum tincidunt sapien maximus.
                                        </p>
                            </div>
                                <div className={`col-md-4 ml-auto mr-auto` + classes.detailInformasi} >
                                    <div className='rounded p-2 p-md-3 bg-light mt-4' >
                                        <h6 className='mb-2' >Kegiatan lainnya</h6>
                                        {myActivity.map((other)=>(
                                            <Link to={`/kegiatanDetail/${other.id}`}>{other.title}<br/></Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Kegiatan