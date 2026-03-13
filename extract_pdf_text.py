#!/usr/bin/env python3
"""
Extract text from Sigma Security PDF and save to a text file.
"""

from pypdf import PdfReader

def extract_text_from_pdf(pdf_path, output_path):
    """
    Extract all text from a PDF file and save to a text file.

    Args:
        pdf_path (str): Path to the input PDF file
        output_path (str): Path to save the extracted text
    """
    try:
        # Read the PDF file
        reader = PdfReader(pdf_path)

        # Extract text from all pages
        full_text = []
        for page_num, page in enumerate(reader.pages, start=1):
            text = page.extract_text()
            full_text.append(f"--- Page {page_num} ---\n{text}\n")

        # Join all pages with newlines
        complete_text = "\n".join(full_text)

        # Save to text file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(complete_text)

        print(f"Successfully extracted text from {len(reader.pages)} pages")
        print(f"Text saved to: {output_path}")
        return complete_text

    except FileNotFoundError:
        print(f"Error: PDF file not found at {pdf_path}")
        return None
    except Exception as e:
        print(f"Error extracting text: {e}")
        return None

if __name__ == "__main__":
    # Input PDF file - using the actual filename found in the directory
    pdf_file = "Sigma Security CP.pdf"

    # Output text file
    output_file = "sigma_security_extracted_text.txt"

    # Extract and save
    extract_text_from_pdf(pdf_file, output_file)
