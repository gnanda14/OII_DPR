package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.custom.pdfFinal.CustomPDF;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_NSPDFViewer extends JSLibrary {

 
 
	public static final String savePDF = "savePDF";
 
 
	public static final String openPDF = "openPDF";
 
 
	public static final String saveDOC = "saveDOC";
 
 
	public static final String openDOC = "openDOC";
 
 
	public static final String saveExcel = "saveExcel";
 
 
	public static final String openExcel = "openExcel";
 
 
	public static final String openPpt = "openPpt";
 
 
	public static final String savePpt = "savePpt";
 
 
	public static final String saveTXT = "saveTXT";
 
 
	public static final String openTXT = "openTXT";
 
	String[] methods = { savePDF, openPDF, saveDOC, openDOC, saveExcel, openExcel, openPpt, savePpt, saveTXT, openTXT };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_NSPDFViewer(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String base64String0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 base64String0 = (java.lang.String)params[0];
 }
 java.lang.String pdfName0 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 pdfName0 = (java.lang.String)params[1];
 }
 ret = this.savePDF( base64String0, pdfName0 );
 
 			break;
 		case 1:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String pdfName1 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 pdfName1 = (java.lang.String)params[0];
 }
 java.lang.String applicationId1 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 applicationId1 = (java.lang.String)params[1];
 }
 ret = this.openPDF( pdfName1, applicationId1 );
 
 			break;
 		case 2:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String base64String2 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 base64String2 = (java.lang.String)params[0];
 }
 java.lang.String pdfName2 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 pdfName2 = (java.lang.String)params[1];
 }
 ret = this.saveDOC( base64String2, pdfName2 );
 
 			break;
 		case 3:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String pdfName3 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 pdfName3 = (java.lang.String)params[0];
 }
 java.lang.String applicationId3 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 applicationId3 = (java.lang.String)params[1];
 }
 ret = this.openDOC( pdfName3, applicationId3 );
 
 			break;
 		case 4:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String base64String4 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 base64String4 = (java.lang.String)params[0];
 }
 java.lang.String pdfName4 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 pdfName4 = (java.lang.String)params[1];
 }
 ret = this.saveExcel( base64String4, pdfName4 );
 
 			break;
 		case 5:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String pdfName5 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 pdfName5 = (java.lang.String)params[0];
 }
 java.lang.String applicationId5 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 applicationId5 = (java.lang.String)params[1];
 }
 ret = this.openExcel( pdfName5, applicationId5 );
 
 			break;
 		case 6:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String base64String6 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 base64String6 = (java.lang.String)params[0];
 }
 java.lang.String applicationId6 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 applicationId6 = (java.lang.String)params[1];
 }
 ret = this.openPpt( base64String6, applicationId6 );
 
 			break;
 		case 7:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String base64String7 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 base64String7 = (java.lang.String)params[0];
 }
 java.lang.String pdfName7 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 pdfName7 = (java.lang.String)params[1];
 }
 ret = this.savePpt( base64String7, pdfName7 );
 
 			break;
 		case 8:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String base64String8 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 base64String8 = (java.lang.String)params[0];
 }
 java.lang.String pdfName8 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 pdfName8 = (java.lang.String)params[1];
 }
 ret = this.saveTXT( base64String8, pdfName8 );
 
 			break;
 		case 9:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String pdfName9 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 pdfName9 = (java.lang.String)params[0];
 }
 java.lang.String applicationId9 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 applicationId9 = (java.lang.String)params[1];
 }
 ret = this.openTXT( pdfName9, applicationId9 );
 
 			break;
 		default:
			break;
		}
 
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "NSPDFViewer";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] savePDF( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.getExternalStorage( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] openPDF( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.openPDF( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] saveDOC( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.getExternalStoragetxt( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] openDOC( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.openDOC( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] saveExcel( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.getExternalStorageExcel( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] openExcel( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.openExcel( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] openPpt( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.openPpt( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] savePpt( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.getExternalStoragePpt( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] saveTXT( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.getExternalStoragePlaintxt( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] openTXT( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.custom.pdfFinal.CustomPDF.openPlaintxt( inputKey0
 , inputKey1
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
};
