import React, { useState, useEffect } from 'react';
import './cryptodatafetch.scss'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const CryptoDataFetcher = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [some, setsome] = useState('some');
  const [Product, setProduct] = useState([]);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    await axios
        .get("http://localhost:7777/coins")
        .then((res) => {
            setProduct(res.data);
        })
        .catch((err) => {
            alert(err);
        })
}


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
        setCryptoData(response.data);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    getProducts()
    fetchData();
  }, []);

  return (
    <>
    <Nav/>
      <div className="case">
        <h1 style={{textAlign: 'center'}}>Cryptocurrency Prices</h1>
        {loading ? (
            <Skeleton className='coins skeleton' count={227} />    
        ) : (
          <section>
            {Product.map((element) => {
              return(
                <div className='c-wrapper'>
                  {cryptoData.filter((el) => el.symbol.toString().substring(3,7) === 'USDT' && el.symbol.toLowerCase() == element.symbol + 'usdt').map((data) => (
                    <Link to={`/coin/${data.symbol}`} className='coins' key={data?.symbol}>
                      <img src={Product.filter((el) => el.symbol + 'usdt' === data.symbol.toLowerCase()).map((el) => el.image)} alt={`${data.symbol} logo`} width="20" height="20" />
                      <h5>{Product.filter((el) => el.symbol + 'usdt' === data.symbol.toLowerCase()).map((el) => el.name) || {some}}</h5> 
                      <b style={{width: '70px'}}>${Number(data.price)}</b>
                  </Link>
                  ))}
              </div>
              )
            })}
          </section>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default CryptoDataFetcher;