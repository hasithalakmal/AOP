/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.dao.AccessDao;
import com.hasitha.aop.model.Access;
import com.hasitha.aop.model.AccountHolder;
import com.hasitha.aop.util.API_keyGenarator;
import com.hasitha.aop.util.PasswordHasher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class AccessManagementServiceImpl implements AccessManagementService {

    @Autowired
    AccessDao accessDao;

    @Autowired
    API_keyGenarator aPI_keyGenarator;

    @Autowired
    PasswordHasher passwordHasher;

    @Override
    public String registerOnline(String pass_user_name, String pass_password, int account_id) {
        String newpassword = passwordHasher.getHashcode(pass_password);
        String apiKey = aPI_keyGenarator.nextAPIId();
        accessDao.addAccess(pass_user_name,newpassword, apiKey, account_id, "AccountHolder");
        return "{\"msg\":\"success\"}";
    }

    @Override
    public Access login(String pass_user_name, String pass_password) {
        String newpassword = passwordHasher.getHashcode(pass_password);
        Access a = accessDao.login(pass_user_name,newpassword);
        return a;
    }

    @Override
    public String changePassword(String pass_user_name, String new_password) {
        String changePw = passwordHasher.getHashcode(new_password);
        accessDao.updateAccess(pass_user_name, changePw);
         return "{\"msg\":\"success\"}";
    }

    @Override
    public void approveAccount(String pass_user_name) {
         accessDao.approveAccess(pass_user_name);
    }
    

    @Override
    public Access getAccess(String pass_user_name) {
        Access a = accessDao.getAccess(pass_user_name);
        return a;
    }

}
