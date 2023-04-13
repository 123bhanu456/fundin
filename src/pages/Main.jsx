import React from 'react'
import styles from '../pages/Main.module.css';

function Main(){
    return(
        <>
        <div className={`${styles.container}`}>
        <div className={`${styles.sidebar}`}>
            <h1 className={`${styles.filter}`}>Filters</h1> 
            <button className={`${styles.sidebtn}`}>Fin Tech</button>
            <button className={`${styles.sidebtn}`}>Ed Tech</button>
            <button className={`${styles.sidebtn}`}>Agro Tech</button>
            <button className={`${styles.sidebtn}`}> AI  </button>
            <button className={`${styles.sidebtn}`}>Health care</button>
            <button className={`${styles.sidebtn}`}>web 3</button>
        </div>
        <div className={`${styles.companycontainer}`}>
            <div className={`${styles.company}`}>
            <div className={`${styles.logo}`} >
                <div>
                <i class="fa-brands fa-joomla"></i>
                </div>
                <div>
                    Company 1
                </div>
            </div> 
            <div  className={`${styles.content}`}>
             Established on  
             </div>
             <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat provident non quis veniam possimus architecto tenetur accusantium molestias laudantium nemo eligendi quisquam recusandae, nisi debitis nihil temporibus quam suscipit? Labore lorem
          
            </div>
            <div className={`${styles.more}`}>more about company</div>
            </div>
         <div className={`${styles.company}`}>
         <div className={`${styles.logo}`} >
                <div>
                 <i class="fa-brands fa-stumbleupon"></i>
                </div>
                <div>
                    Company 2
                </div>
            </div> 
            <div  className={`${styles.content}`}>
             Established on
             </div>
             <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat provident non quis veniam possimus architecto tenetur accusantium molestias laudantium nemo eligendi quisquam recusandae, nisi debitis nihil temporibus quam suscipit? Labore lorem
      
            </div>
            <div className={`${styles.more}`}>more about company</div>
         </div>
         <div className={`${styles.company}`}>
            <div className={`${styles.logo}`} >
                <div>
                <i class="fa-brands fa-joomla"></i>
                </div>
                <div>
                    Company 1
                </div>
            </div> 
            <div  className={`${styles.content}`}>
             Established on
             </div>
             <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat provident non quis veniam possimus architecto tenetur accusantium molestias laudantium nemo eligendi quisquam recusandae, nisi debitis nihil temporibus quam suscipit? Labore lorem
      
            </div>
            <div className={`${styles.more}`}>more about company</div>
            </div>
         <div className={`${styles.company}`}>
         <div className={`${styles.logo}`} >
                <div>
                 <i class="fa-brands fa-stumbleupon"></i>
                </div>
                <div>
                    Company 2
                </div>
            </div> 
            <div  className={`${styles.content}`}>
             Established on
             </div>
             <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat provident non quis veniam possimus architecto tenetur accusantium molestias laudantium nemo eligendi quisquam recusandae, nisi debitis nihil temporibus quam suscipit? Labore lorem
      
            </div>
            <div className={`${styles.more}`}>more about company</div>
         </div>
         <div className={`${styles.company}`}>
            <div className={`${styles.logo}`} >
                <div>
                <i class="fa-brands fa-joomla"></i>
                </div>
                <div>
                    Company 1
                </div>
            </div> 
            <div  className={`${styles.content}`}>
             Established on
             </div>
             <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat provident non quis veniam possimus architecto tenetur accusantium molestias laudantium nemo eligendi quisquam recusandae, nisi debitis nihil temporibus quam suscipit? Labore lorem
      
            </div>
            <div className={`${styles.more}`}>more about company</div>
            </div>
         <div className={`${styles.company}`}>
         <div className={`${styles.logo}`} >
                <div>
                 <i class="fa-brands fa-stumbleupon"></i>
                </div>
                <div>
                    Company 2
                </div>
            </div> 
            <div  className={`${styles.content}`}>
             Established on
             </div>
             <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat provident non quis veniam possimus architecto tenetur accusantium molestias laudantium nemo eligendi quisquam recusandae, nisi debitis nihil temporibus quam suscipit? Labore lorem
      
            </div>
            <div className={`${styles.more}`}>more about company</div>
         </div>
        
         </div>
          
            </div>
          
        

        
        </>
    )
}
export {Main};