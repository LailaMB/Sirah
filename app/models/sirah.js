exports.definition = {
	config: {
		columns: {
			id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
			groupid: 'TEXT',
			audionumber: 'TEXT',
			audiotext: 'TEXT',
			audionumber: 'TEXT',
			questiontext: 'TEXT',
			ch1: 'TEXT',
			ch2: 'TEXT',
			ch3: 'TEXT',
			correct: 'TEXT'
			
			
		},
		adapter: {
			type: 'sql',
			collection_name: 'sirah',
			idAttribute: 'id',
			"db_file": "db.db3",
		}
	}
};