import json
import pickle
import numpy as np
import os

__locations = None
__data_columns = None
__model = None


def get_estimated_price(location, sqft, bhk, bath):
    global __data_columns, __model
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    # feature vector of same size as data_columns
    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0], 2)


def get_location_names():
    return __locations


def load_saved_artifacts():
    print('Loading saved artifacts....start')
    global __locations
    global __data_columns
    global __model

    # Get the absolute path to the directory of the current script
    dir_path = os.path.dirname(os.path.realpath(__file__))

    # Load columns.json
    columns_path = os.path.join(dir_path, "artifacts", "columns.json")
    with open(columns_path, 'r') as f:
        data = json.load(f)
        __data_columns = data['data_columns']
        __locations = __data_columns[3:]

    # Load model
    model_path = os.path.join(dir_path, "artifacts", "banglore_home_prices_model.pickle")
    with open(model_path, 'rb') as f:
        __model = pickle.load(f)

    print('Loading saved artifacts....done')
