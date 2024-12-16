import { NavLink } from 'react-router-dom'
import './SidebarDash.css'
import { useState } from 'react'

function SidebarDash() {
    const [isProductAction, setIsProductAction] = useState(true)
    const [isOpen, setOpen] = useState(true)
    const [dragStart, setDargStart] = useState(0)

    function onDargStart(e) {
        setDargStart(e.clientX);
    }
    function onDargEnd(e) {
        const dragEnd = e.clientX;
        const dragDistance = dragEnd - dragStart;
        if (dragDistance > 50) {
            setOpen(true)
        } else if (dragDistance <= -50) {
            setOpen(false)
        }
    }
    return (
        <div className='sidebar-dash' >
            <div className='draggable'
                draggable
                onDragStart={(e) => onDargStart(e)}
                onDragEnd={(e) => onDargEnd(e)}
            >

            </div>
            {
                isOpen ? <ul>
                    <li>
                        <div className='sidebar-dash-product' onClick={() => setIsProductAction(!isProductAction)}>
                            <div>
                                <i className="fa-brands fa-product-hunt"></i>
                                Products
                            </div>
                            <i className={`fa-solid fa-chevron-${isProductAction ? 'up' : 'down'}`}></i>
                        </div>
                        {
                            isProductAction ? <ul>
                                <li>
                                    <NavLink to={'product/insert'}>
                                        <i className="fa-solid fa-file-import"></i>
                                        Insert
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'product/update'}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                        Update
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'product/delete'}>
                                        <i className="fa-solid fa-trash"></i>
                                        Delete
                                    </NavLink>
                                </li>
                            </ul> : null
                        }


                    </li>
                    <li>
                        <NavLink to={'user'} >
                            <i className="fa-solid fa-user"></i>
                            user
                        </NavLink>
                    </li>
                </ul> : null
            }

        </div>
    )
}

export default SidebarDash