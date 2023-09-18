import React from 'react';
import {NextPage}  from 'next';

interface PageTypeProps{

}

const product : NextPage<PageTypeProps> = ((e:object) =>{
    return (
        <div>
        </div>
    );
}
);

product.getInitialProps = async({}) =>{
    return {};
};

export default product;