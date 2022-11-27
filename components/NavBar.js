import Link from "next/Link"
import { AiOutlineShopping } from 'react-icons/ai'

export default function NavBar() {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href='/'>Next Store</Link>
            </p>

            <button type="button" className="cart-icon" onClick="">
                <AiOutlineShopping />
                <span className="cart-item-qty">1</span>
            </button>
        </div>
    )
}