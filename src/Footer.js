import React from 'react'
import  './Footer.css'

export default function Footer(){
    return(
        <footer className = 'main-footer'>
            <div className='wrapper'>
                <form>
  <label for="email">Subscribe to our newsletter</label>
  <input type="email" id="email" name="email"></input>
  <input type="submit" value="Subscribe"></input>
</form> 

            
                <div className = 'row'>
                    {/* Column1 */}
                    <div className = 'col'>
                       
                        <h4>Company</h4>
                        <ul className = 'list-unstyled'>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Partners</li>
                            <li>Transport Companies</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                        <h4>Social</h4>
                        <ul className='list-unstyled'>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        </ul>

                    </div>
                    {/* Column3 */}
                    <div className='col'>
                        <h4>Support</h4>
                        <ul className='list-unstyled'>
                            <li>FAQS</li>
                            <li>Help Center</li>
                            <li></li>
                            <li></li>

                        </ul>

                    </div>

                </div>
                <div className='row'>
                    <p className='col-sm'>
                       Copyright &copy;{new Date().getFullYear()} Shuttle9ja. All rights reserved.

                    </p>
                </div>
            </div>
        </footer>
    )
}