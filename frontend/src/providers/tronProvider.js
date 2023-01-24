import React, { useState, useEffect } from 'react';

// +++++++++++++  Test Net
// const USDT_TRON_Contract = "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
// const USDFX_TRON_Contract = "TFxFhWaRYHjhCgNnMesgXEzrxnjDbLdNeu";
// const to = "TPhtvwrzNrF3aGBWvATP9sVJec9jhzELVm"; //USDFX Tron Account address

//++++++++++++   Main Net
const USDT_TRON_Contract = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
const USDFX_TRON_Contract = "TTGBBxHBZ2uVt74FQVpesSgMKEDSuS2QsJ";

const to = "TLCddvfwBJuy54rmyKmNnyupTNSPDErUcZ"; //USDFX Tron Account address

export const signInTron = async () => {  
    
    const tronWeb = window.tronWeb;

    const from = tronWeb.defaultAddress.base58;
    const contract = await tronWeb.contract().at(USDT_TRON_Contract);
    const contract_usdfx = await tronWeb.contract().at(USDFX_TRON_Contract);

    const balance = await contract.methods.balanceOf(from).call();
    const tron_locked_usdfx = parseInt(await contract_usdfx.methods.get_lock_amount(from).call());
    const tron_usdfxBalance = await contract_usdfx.methods.balanceOf(from).call();
    
    return {
        tron_usdtBalance : balance,
        tron_usdfxBalance : tron_usdfxBalance,
        tron_locked_usdfx : tron_locked_usdfx,
        Tron : true
    }
}

export const signOutTron = async () => {
    window.location.replace(window.location.origin);
}

export const swapInTron = async (swapAmount) => {
    if (swapAmount != null && swapAmount != undefined){
        let amount = swapAmount * 1000000;

        const tronWeb = window.tronWeb;
        const from = tronWeb.defaultAddress.base58;

        const contract = await tronWeb.contract().at(USDT_TRON_Contract);       
        const resp = await contract.methods.approve(USDFX_TRON_Contract, amount).send();

        if (resp){
            const constract_usdfx =await tronWeb.contract().at(USDFX_TRON_Contract);
            const success = await constract_usdfx.methods.swap(amount).send();
            console.log("success",success);
        }
    }  
}