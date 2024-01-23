const vscode = require('vscode');
const cp = require('child_process');
const util = require('util');
const exec = util.promisify(cp.exec);

async function activate(context) {
    if(await check()){
		vscode.window.showInformationMessage('You got everything installed');
	}else{
		vscode.window.showErrorMessage("You don't have the language installed. Please  install it");
		
	}
}

async function check(){
	try {
		await exec('april -v');
		return true;
	} catch (error) {
		return false;
	}
}

module.exports = {
    activate
};
