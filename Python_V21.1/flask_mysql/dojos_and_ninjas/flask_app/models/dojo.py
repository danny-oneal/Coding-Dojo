from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import ninja


class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls):
        query = """
            SELECT * FROM dojos;
        """
        all_dojos = []
        results = connectToMySQL(DATABASE).query_db(query)
        for row in results:
            dojo_instance = cls(row)
            all_dojos.append(dojo_instance)

        return all_dojos

    @classmethod
    def get_one(cls, data):
        query = """
            SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;
        """
        all_dojos = []
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            dojo_instance = cls(results[0])
            ninja_list = []
            for row in results:
                if row["ninjas.id"] == None:
                    return dojo_instance

                ninja_data = {
                    "id": row["ninjas.id"],
                    "dojo_id": row["id"],
                    "first_name": row["first_name"],
                    "last_name": row["last_name"],
                    "age": row["age"],
                    "created_at": row["ninjas.created_at"],
                    "updated_at": row["ninjas.updated_at"],
                }
                ninja_instance = ninja.Ninja(ninja_data)
                ninja_list.append(ninja_instance)
            dojo_instance.ninjas = ninja_list
        return dojo_instance

    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO dojos (name) VALUES (%(name)s);
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results

    @classmethod
    def delete(cls, data):
        query = """
            DELETE FROM dojos 
            WHERE id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results
