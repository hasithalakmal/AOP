/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.Access;

/**
 *
 * @author Hasitha Lakmal
 */
public interface AccessDao {
    public void addAccess(String pass_user_name, String pass_password, String pass_api_key, int pass_acch_id, String pass_user_type);
    
    public void updateAccess(String pass_user_name, String pass_password);
    
    public void approveAccess(String pass_user_name);
    
    public Access login(String pass_user_name, String pass_password);
    
    public Access getAccess(String pass_user_name);
}
