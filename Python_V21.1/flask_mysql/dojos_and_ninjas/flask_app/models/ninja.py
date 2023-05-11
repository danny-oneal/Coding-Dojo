from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE


class Ninja:
    def __init__(self, data):
        self.id = data["id"]
        self.dojo_id = data["dojo_id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.age = data["age"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls):
        query = """
            SELECT * FROM ninjas;
        """
        all_ninjas = []
        results = connectToMySQL(DATABASE).query_db(query)
        for row in results:
            user_instance = cls(row)
            all_ninjas.append(user_instance)

        return all_ninjas

    @classmethod
    def get_one(cls, data):
        query = """
            SELECT * FROM ninjas WHERE id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            user_instance = cls(results[0])
            return user_instance
        return results

    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES (%(first_name)s,%(last_name)s,%(age)s, %(dojo_id)s);
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results

    @classmethod
    def update(cls, data):
        query = """
            UPDATE ninjas 
            SET first_name = %(first_name)s, last_name = %(last_name)s, age = %(age)s
            WHERE id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results

    @classmethod
    def delete(cls, data):
        query = """
            DELETE FROM ninjas 
            WHERE id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results
