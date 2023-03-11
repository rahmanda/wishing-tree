import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
          <div className="for_position" style={{display:'table', height: '100%', width: '100%'}}>
        <div className="container-fluid" style={{verticalAlign: 'middle', display: 'table-cell'}}>
            <div className="col-lg-2"></div>
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-5 tree">

                <img src="https://image.ibb.co/mwmBua/tree.png" className="tree_img" />

                <div className="leaf_test"/>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-sm">

                        <div className="modal-content">
                            <img src="https://image.ibb.co/gpRY7v/wish_background.jpg" />

                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title"></h4>
                            </div>

                            <div className="modal-body">
                                <p id="modal_content"></p>
                                <p id="modal_name"></p>
                                <p id="modal_time"></p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" style={{position: 'relative', background: 'none'}}>Close</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div className="col-lg-1"></div>


        </div>


    </div>

    <div className="grass">
        <img src="https://image.ibb.co/cjgBua/front_grass.png" style={{width: '100%'}} />
    </div>
    </main>
  )
}
