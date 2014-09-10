exports.definition = {
	config: {
		columns: {
			id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
			title: 'TEXT'
		},
		adapter: {
			type: 'sql',
			collection_name: 'groups',
			idAttribute: 'id',
			"db_file": "/db.db3",
		}
	}
};