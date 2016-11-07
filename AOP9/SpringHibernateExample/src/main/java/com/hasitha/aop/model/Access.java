/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.model;

import java.sql.Timestamp;

/**
 *
 * @author Hasitha Lakmal
 */
public class Access {
    private String pass_user_name;
    private String pass_password;
    private String pass_api_key;
    private int pass_acch_id;
    private String pass_user_type;
    private int pass_status;
    private Timestamp pass_create;
    private Timestamp pass_modifi;

    public String getPass_user_name() {
        return pass_user_name;
    }

    public void setPass_user_name(String pass_user_name) {
        this.pass_user_name = pass_user_name;
    }

    public String getPass_password() {
        return pass_password;
    }

    public void setPass_password(String pass_password) {
        this.pass_password = pass_password;
    }

    public String getPass_api_key() {
        return pass_api_key;
    }

    public void setPass_api_key(String pass_api_key) {
        this.pass_api_key = pass_api_key;
    }

    public int getPass_acch_id() {
        return pass_acch_id;
    }

    public void setPass_acch_id(int pass_acch_id) {
        this.pass_acch_id = pass_acch_id;
    }

    public String getPass_user_type() {
        return pass_user_type;
    }

    public void setPass_user_type(String pass_user_type) {
        this.pass_user_type = pass_user_type;
    }

    public int getPass_status() {
        return pass_status;
    }

    public void setPass_status(int pass_status) {
        this.pass_status = pass_status;
    }

    public Timestamp getPass_create() {
        return pass_create;
    }

    public void setPass_create(Timestamp pass_create) {
        this.pass_create = pass_create;
    }

    public Timestamp getPass_modifi() {
        return pass_modifi;
    }

    public void setPass_modifi(Timestamp pass_modifi) {
        this.pass_modifi = pass_modifi;
    }

    @Override
    public String toString() {
        return "Access{" +  "pass_user_name=" + pass_user_name + ", pass_password=" + pass_password + ", pass_api_key=" + pass_api_key + ", pass_acch_id=" + pass_acch_id + ", pass_user_type=" + pass_user_type + ", pass_status=" + pass_status + ", pass_create=" + pass_create + ", pass_modifi=" + pass_modifi + '}';
    }
    
    
    
    
    
}
