import fs from 'node:fs';
import _ from 'lodash';

const compare = (filepath1, filepath2) => {
	if (filepath1.endsWith('.json') && filepath2.endsWith('.json')) {
		const contentFile1 = JSON.parse(fs.readFileSync(filepath1, 'utf8'));
		const contentFile2 = JSON.parse(fs.readFileSync(filepath2, 'utf8'));
		
		const diff = [];
		const obj = Object.keys(contentFile1)
			.concat(Object.keys(contentFile2));
		const uniqKeys = _.uniq(obj).sort();
		for (const key of uniqKeys) {
			if (contentFile1[key] === contentFile2[key]) {
				diff.push(`  ${key}: ${contentFile1[key]}`);
			} else if (contentFile1[key] === undefined) {
					diff.push(` +${key}: ${contentFile2[key]}`);
			} else if (contentFile2[key] === undefined) {
					diff.push(` -${key}: ${contentFile1[key]}`); 
			} else if (contentFile1[key] !== contentFile2[key]) {
				diff.push(` +${key}: ${contentFile1[key]}`);
				diff.push(` -${key}: ${contentFile2[key]}`); 
			}
		}
		console.log(`{\n${diff.join('\n')}\n}`);
	}
};

export default compare;