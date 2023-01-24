pragma solidity ^0.5.0;

import "./TRC20.sol";
import "./TRC20Detailed.sol";

contract USDFX is TRC20, TRC20Detailed {
    
    uint256 total_amount = 97000000000000;
    uint256 marketing_amount = 3000000000000;
    uint256 team_amount = 10000000000000;
    uint256 insurance_amount = 3000000000000;

    string tokeName = "USDFX";
    string tokenSymbol = "USDFX";
    
    uint256[] unlock_date_user;
    uint256[] unlock_date_team;
    uint256[] unlock_date_insurance;
    
    uint date = 1669852800;//2022-12-1

    uint launch_Date = 1671408000; // date + 86400 * 18 = 2022-12-19
    
    mapping (address => uint256) public locked_amount_user;
    mapping (address => uint256) public unlock_amount_user;
    mapping (address => uint256) public unlock_amount_team;
    mapping (address => uint256) public unlock_amount_insurance;
    
    mapping (address => uint256) public claim_time_pre;
    mapping (address => uint256) public swap_time;

    uint256[12] unlock_percent_user = [1200, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800];
    uint256[18] unlock_percent_team = [900, 700, 700, 700, 700, 700, 650, 650, 650, 500, 500, 450, 450, 350, 350, 350, 350, 350];
    uint256[24] unlock_percent_insurance = [600, 600, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400];
    
    mapping (address => bool) public privateWallets;
    
    constructor () public TRC20Detailed(tokeName, tokenSymbol, 6) {
        _mint(msg.sender, 100000000000000);
        for (uint256 i=0; i<12; i++){
            unlock_date_user.push(launch_Date + i * 2592000);
        }
        for (uint256 i=0; i<18; i++){
            unlock_date_team.push(launch_Date + i * 2592000);
        }
        for (uint256 i=0; i<24; i++){
            unlock_date_insurance.push(launch_Date + i * 2592000);
        }
    }
    
    
    function sePrivatetWallet(address _wallet) public{
        privateWallets[_wallet]=true;
    }
    
    function contains(address _wallet) public view returns (bool){
        return privateWallets[_wallet];
    }
    
    function get_Time(address from) public view returns(uint256){
        uint256 Time = claim_time_pre[from];
        return Time;
    }
    function get_lock_amount(address from) public view returns(uint256){
        uint256 locked_user_amount = locked_amount_user[from];
        return locked_user_amount;
    }
    
    function get_unlock_amount(address from) public view returns(uint256){
         uint256 unlock_user_amount = unlock_amount_user[from];
         return unlock_user_amount;
    }
    
    function swap(uint256 amount) public returns(uint256) {
        swap_time[msg.sender] = block.timestamp;
        
        ITRC20(0x4142a1e39aefa49290f2b3f9ed688d7cecf86cd6e0).transferFrom(msg.sender, address(this), amount);
        
        if ( swap_time[msg.sender] > launch_Date){
            uint256 USDFX_amount = amount * 95 / 100;
            _transfer(address(this), msg.sender, USDFX_amount);
        } else {
            bool check = contains(msg.sender);
        
            if (check == true){
                uint256 USDFX_amount = amount * 120 / 50;
                locked_amount_user[msg.sender] += USDFX_amount;
                return 0;
            }else {
                uint256 USDFX_amount = amount * 120 / 75;
                locked_amount_user[msg.sender] += USDFX_amount / 1000000;
                return 0;
            }
        }
    }
    
    function claim_token(address from) public returns(uint256){
        uint256 claim_time = block.timestamp;

        uint256 num_one = 0;
        uint256 num_two = 0;
        
        
        if (claim_time_pre[from] > launch_Date){
            uint256 diff_days = (claim_time - claim_time_pre[from]) / 86400;
            if (diff_days > 30){
                 for (uint256 i=0; i< unlock_date_user.length; i++ ){
                    if (unlock_date_user[i] < claim_time &&  claim_time < unlock_date_user[i+1]){
                      num_one = i;
                    }
                    if (unlock_date_user[i] < claim_time_pre[from] ||  claim_time_pre[from] < unlock_date_user[i+1]){
                      num_two = i;
                    }
                }
                for (uint256 j = num_one; j > num_two; j--){
                    uint256 percent = 0;
                    percent += unlock_percent_user[j];
                    unlock_amount_user[from] = (percent / 100) * locked_amount_user[from] / 100;
                    locked_amount_user[from] -= unlock_amount_user[from];
                    claim_time_pre[from] = claim_time;
                    _transfer(msg.sender, from, unlock_amount_user[from]);
                }
            }
        }
        else {
            if ( claim_time > launch_Date){
                uint256 diff_days = (claim_time - launch_Date) / 86400;
                if (diff_days > 0 ){
                    for (uint256 i=0; i< unlock_date_user.length; i++ ){
                        if (unlock_date_user[i] < claim_time &&  claim_time < unlock_date_user[i+1]){
                            num_one = i;
                        }
                    }
                    for (uint256 j = 0; j< num_one + 1 ; j++){
                        uint256 percent = 0;
                        percent += unlock_percent_user[j];
                        unlock_amount_user[from] = locked_amount_user[from] * (percent / 100) / 100;
                        locked_amount_user[from] -= unlock_amount_user[from];
                        claim_time_pre[from] = claim_time;
                        _transfer(msg.sender, from, unlock_amount_user[from]);
                    }
                }
            }
            else{
             return 0;   
            }
        }
    }
    

    function team_unlock(address from) public returns(uint256){
        uint256 claim_time = block.timestamp;

        uint256 num_one = 0;
        uint256 num_two = 0;
        
        
        if (claim_time_pre[from] > launch_Date){
            uint256 diff_days = (claim_time - claim_time_pre[from]) / 86400;
            if (diff_days > 30){
                 for (uint256 i=0; i< unlock_date_team.length; i++ ){
                    if (unlock_date_team[i] < claim_time &&  claim_time < unlock_date_team[i+1]){
                      num_one = i;
                    }
                    if (unlock_date_team[i] < claim_time_pre[from] ||  claim_time_pre[from] < unlock_date_team[i+1]){
                      num_two = i;
                    }
                }
                for (uint256 j = num_one; j > num_two; j--){
                    uint256 percent = 0;
                    percent += unlock_percent_team[j];
                    unlock_amount_team[from] = (percent / 100) * team_amount / 100;
                    team_amount -= unlock_amount_team[from];
                    claim_time_pre[from] = claim_time;
                    _transfer(msg.sender, from, unlock_amount_team[from]);
                }
            }
        }
        else {
            // uint256 claim_time = block.timestamp;
            uint256 diff_days = (claim_time - launch_Date) / 86400; //86400
            if (diff_days > 0 ){
                for (uint256 i=0; i< unlock_date_team.length; i++ ){
                    if (unlock_date_team[i] < claim_time &&  claim_time < unlock_date_team[i+1]){
                        num_one = i;
                    }
                }
                for (uint256 j = 0; j< num_one + 1 ; j++){
                    uint256 percent = 0;
                    percent += unlock_percent_team[j];
                    unlock_amount_team[from] = team_amount * (percent / 100) / 100;
                    team_amount -= unlock_amount_team[from];
                    claim_time_pre[from] = claim_time;
                    _transfer(msg.sender, from, unlock_amount_team[from]);
                }
            }
            else{
                return 0;
            }
        }
    }
    
    function insurance_unlock(address from) public returns(uint256){
        uint256 claim_time = block.timestamp;
        uint256 num_one = 0;
        uint256 num_two = 0;
        if (claim_time_pre[from] > launch_Date){
            uint256 diff_days = (claim_time - claim_time_pre[from]) / 86400;
            if (diff_days > 30){
                 for (uint256 i=0; i< unlock_date_insurance.length; i++ ){
                    if (unlock_date_insurance[i] < claim_time &&  claim_time < unlock_date_insurance[i+1]){
                      num_one = i;
                    }
                    if (unlock_date_insurance[i] < claim_time_pre[from] ||  claim_time_pre[from] < unlock_date_insurance[i+1]){
                      num_two = i;
                    }
                }
                for (uint256 j = num_one; j > num_two; j--){
                    uint256 percent = 0;
                    percent += unlock_percent_insurance[j];
                    unlock_amount_insurance[from] = (percent / 100) * insurance_amount / 100;
                    insurance_amount -= unlock_amount_insurance[from];
                    claim_time_pre[from] = claim_time;
                    _transfer(msg.sender, from, unlock_amount_insurance[from]);
                }
            }
        }
        else {
            // uint256 claim_time = block.timestamp;
            uint256 diff_days = (claim_time - launch_Date) / 86400; //86400
            if (diff_days > 0 ){
                for (uint256 i=0; i< unlock_date_insurance.length; i++ ){
                    if (unlock_date_insurance[i] < claim_time &&  claim_time < unlock_date_insurance[i+1]){
                        num_one = i;
                    }
                }
                for (uint256 j = 0; j< num_one + 1 ; j++){
                    uint256 percent = 0;
                    percent += unlock_percent_insurance[j];
                    unlock_amount_insurance[from] = insurance_amount * (percent / 100) / 100;
                    insurance_amount -= unlock_amount_insurance[from];
                    claim_time_pre[from] = claim_time;
                    _transfer(msg.sender, from, unlock_amount_insurance[from]);
                }
            }
            else{
                return 0;
            }
        }
    }
}