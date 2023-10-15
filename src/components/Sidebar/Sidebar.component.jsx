import 'bootstrap/dist/css/bootstrap.min.css'
import * as Style from './sidebar.style'
import { GoSidebarExpand } from 'react-icons/go'

export default function SidebarComponent() {
  return (
    <Style.Sidebar>
            <div className='d-flex flex-end justify-content-end'>
                <button style={{background: 'transparent', border: 'none'}}>
                    <GoSidebarExpand size={'1.5rem'} color='#fefefe' />
                </button>
            </div>
        <Style.SidebarBody>
            <div style={{color: '#524FA1', fontWeight: 'bold'}}>REACTive.</div>

            <Style.SidebarActions>
                <a href="#" className='text-muted disabled text-decoration-none'>Current Page</a>
                <a href="#" className='text-muted disabled text-decoration-none'>other Page</a>
                <a href="#" className='text-muted disabled text-decoration-none'>another Page</a>
            </Style.SidebarActions>
            
            <div>
                <a href="#">Log Out</a>
            </div>
        </Style.SidebarBody>
    </Style.Sidebar>
  )
}
