/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.model.Access;
import com.hasitha.aop.model.AccountHolder;

/**
 *
 * @author Hasitha Lakmal
 */
public interface AccessManagementService {

    public String registerOnline(String pass_user_name, String pass_password, int account_id);
    
     public Access getAccess(String pass_user_name);

    public Access login(String pass_user_name, String pass_password);

    public String changePassword(String pass_user_name, String new_password);

    public void approveAccount(String pass_user_name);
}
