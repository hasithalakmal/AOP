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
public class AccountHolder {
    private int acch_id;
    private String acch_name;
    private String acch_mobile;
    private String acch_adress;
    private int acch_state;
    private Timestamp acch_create;
    private Timestamp acch_last_modified;

    public int getAcch_id() {
        return acch_id;
    }

    public void setAcch_id(int acch_id) {
        this.acch_id = acch_id;
    }

    public String getAcch_name() {
        return acch_name;
    }

    public void setAcch_name(String acch_name) {
        this.acch_name = acch_name;
    }

    public String getAcch_mobile() {
        return acch_mobile;
    }

    public void setAcch_mobile(String acch_mobile) {
        this.acch_mobile = acch_mobile;
    }

    public String getAcch_adress() {
        return acch_adress;
    }

    public void setAcch_adress(String acch_adress) {
        this.acch_adress = acch_adress;
    }

    public int getAcch_state() {
        return acch_state;
    }

    public void setAcch_state(int acch_state) {
        this.acch_state = acch_state;
    }

    public Timestamp getAcch_create() {
        return acch_create;
    }

    public void setAcch_create(Timestamp acch_create) {
        this.acch_create = acch_create;
    }

    public Timestamp getAcch_last_modified() {
        return acch_last_modified;
    }

    public void setAcch_last_modified(Timestamp acch_last_modified) {
        this.acch_last_modified = acch_last_modified;
    }

    @Override
    public String toString() {
        return "AccountHolder{" + "acch_id=" + acch_id + ", acch_name=" + acch_name + ", acch_mobile=" + acch_mobile + ", acch_adress=" + acch_adress + ", acch_state=" + acch_state + ", acch_create=" + acch_create + ", acch_last_modified=" + acch_last_modified + '}';
    }
    
    

   
    
}
