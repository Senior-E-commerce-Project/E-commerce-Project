function AdminProducts() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/Products/getAll')
      .then((result) => {
        setAdminData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  
  return (
    <div>
  
        
       
       
      <div className='flex grid grid-cols-3 gap-4 overflow-hidden shadow-2xl'>
     {adminData.map((el)=>(
      <div className=''>
      {console.log(el.ProductName)}
      <div className='w-80 h-72 flex justify-center items-center mt-11'>
     <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'></div> 
        <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'></div>

      

       
       
 
        
        <img className=' w-40 ' src={el.ProductImage} alt="" />
         </div>
         
         <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-300 line-through	'>{(el.Price / (1 - el.Discount/ 100)).toFixed(2)}</h1>
         </div>
         </div>
     ))
    
        }
    </div>
    </div>
  )
      }   

export default AdminProducts;
