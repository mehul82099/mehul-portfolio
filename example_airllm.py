from airllm import AutoModel
import sys

# Define the model to run. AirLLM allows running huge models on very small VRAM.
# Using Platypus2-70B-instruct as the standard example.
MAX_LENGTH = 128
# could use 'garage-bAInd/Platypus2-70B-instruct', 'meta-llama/Llama-2-70b-chat-hf', etc.
model_name = "garage-bAInd/Platypus2-70B-instruct"

print(f"Loading {model_name}...")
# Note: By default, this will download the weights and cache them.
# The cache might take up > 100GB of disk space.
model = AutoModel.from_pretrained(model_name)

input_text = [
    'What is the capital of United States?'
]

print("Tokenizing input...")
input_tokens = model.tokenize(input_text)

print("Starting generation...")
generation_output = model.generate(
    input_tokens,
    max_new_tokens=20,
    use_cache=True,
    return_dict_in_generate=True
)

output = model.decode(generation_output.sequences[0])

print("\n--- Output ---")
print(output)
print("--------------")
